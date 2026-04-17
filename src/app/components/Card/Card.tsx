"use client"

import Link from "next/link";
import style from "./card.module.css";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, -0.2, 0.2, 0.5], [0.4, 0, 0, 0.4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={style.page_numbers}
    >
      {/* Слой блика */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.1) 0%, transparent 30%)`,
          opacity: glareOpacity,
          zIndex: 1,
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />
      <div style={{ transform: "translateZ(40px)", position: "relative", zIndex: 2}}>
        {children}
      </div>
    </motion.div>
  );
}

export function Card() {
  return (
    <div className={style.container}>
      <TiltCard>
        <div className={style.left_card} id="tarif">
          <h1>STANDARD АКАДЕМИЯ</h1>
          <div className={style.card_title}>
            <div className={style.card_header}>
              <div className={style.card_item}>
                <p>Формат обратной связи</p>
                <span>Групповой чат</span>
              </div>
              <div className={style.card_item}>
                <p>Доступ к обучению</p>
                <span>10 модулей, 35 уроков</span>
              </div>
            </div>
            <div className={style.card_header}>
              <div className={style.card_item}>
                <p>Обратная связь от наставника</p>
                <span>1 месяц</span>
              </div>
              <div className={style.card_item}>
                <p>Созвоны в общем чате учеников</p>
                <span>1 созвон</span>
              </div>
              <div className={style.card_item_scuff}>
                <p>Созвоны в общем чате учеников</p>
                <span>1 созвон</span>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.price}>
              <h2>Стоимость</h2>
              <div className={style.sum}>
                <span>99 000 ₽</span>
                <span>69 000 ₽</span>
              </div>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Оплатить в рассрочку</span>
                <span>5.750 / месяц</span>
              </Link>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Оплатить полностью</span>
              </Link>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Забронировать</span>
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
      <TiltCard>
        <div className={style.left_card}>
          <h1>PREMIUM АКАДЕМИЯ</h1>
          <div className={style.card_title}>
            <div className={style.card_header}>
              <div className={style.card_item}>
                <p>Формат обратной связи</p>
                <span>Групповой чат</span>
              </div>
              <div className={style.card_item}>
                <p>Доступ к обучению</p>
                <span>10 модулей, 35 уроков</span>
              </div>
            </div>
            <div className={style.card_header}>
              <div className={style.card_item}>
                <p>Обратная связь от наставника</p>
                <span>3 месяца</span>
              </div>
              <div className={style.card_item}>
                <p>Созвоны в общем чате учеников</p>
                <span>3 созвона</span>
              </div>
              <div className={style.card_item}>
                <p>Доступ в закрытый канал с сигналами и аналитикой</p>
                <span>3 месяца</span>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.price}>
              <h2>Стоимость</h2>
              <div className={style.sum}>
                <span>149 000 ₽</span>
                <span>99 000 ₽</span>
              </div>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Оплатить в рассрочку</span>
                <span>8.250 / месяц</span>
              </Link>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Оплатить полностью</span>
              </Link>
            </div>
            <div className={style.btn_pay}>
              <Link href="#">
                <span>Забронировать</span>
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}