'use client';

import React, { useRef } from 'react';
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import style from "./In_numbers.module.css";

// Вспомогательный компонент для анимации карточки
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Значения положения мыши
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Плавность движений
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Трансформация в наклон (градусы)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Эффект блика: меняем положение градиента
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
      className={style.line}
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
          //@ts-ignore
          "--glare-x": glareX,
          //@ts-ignore
          "--glare-y": glareY,
        }}
      />

      {/* Контент карточки */}
      <div style={{ transform: "translateZ(40px)", position: "relative", zIndex: 2}}>
        {children}
      </div>
    </motion.div>
  );
}

// Основной компонент
export function In_numbers() {
  const data = [
    { p: "3000+", span: "Студентов" },
    { p: "20+", span: "Человек работает над программами обучения" },
    { p: "6 Лет", span: "Знакомим с рынком крипты" },
    { p: "1.5 млн+", span: "Подписчиков на медиа-ресурсах" },
  ];

  return (
    <div className={style.container}>
      <h1>Мы в цифрах</h1>
      <div className={style.main}>
        {data.map((item, index) => (
          <TiltCard key={index}>
            <p>{item.p}</p>
            <span>{item.span}</span>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
