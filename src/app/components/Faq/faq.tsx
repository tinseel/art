"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./faq.module.css";

interface ItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Faq = ({ title, content, isOpen, onToggle }: ItemProps) => (
  <div className={styles.item}>
    <button className={`${styles.trigger} ${isOpen ? styles.active : ""}`}  onClick={onToggle}>
      {title}
      <motion.span 
        className={styles.icon}
        animate={{ 
          rotate: isOpen ? 180 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 1,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className={styles.content}
        >
          <div className={styles.text}>{content}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const data = [
    { title: "Смогу разобраться, если ничего не знаю о крипте?", content: "Конечно! Курс специально разработан для новичков и поможет постепенно войти в мир криптовалют, начиная с основ и постепенно переходя к более сложным темам. В результате вы получите крепкую базу, необходимую для начала заработка." },
    { title: "Как долго будет доступно обучение после вступления в академию?", content: "Доступ к обучению всем материалам предоставляется на 6 либо 12 месяцев в зависимости от тарифа." },
    { title: "Зачем обучение, если можно изучить все самостоятельно?", content: "Обучение с нами сэкономит вам много времени, позволяя избежать месяцев или даже лет самообразования. Вы получите актуальные знания и опыт, а также избежите необходимости переучиваться. Кроме того, 99% новичков теряют деньги на старте, так как не знают, как правильно управлять рисками и избегать мошенничества. Поэтому тщательно взвесьте все плюсы." },
    { title: "У меня точно получится?", content: "Определенно! Если вы внимательно изучите все материалы и будете следовать нашим инструкциям, которые адаптированы для новичков, у вас все получится." },
    { title: "Смогу ли я зарабатывать вступив в академию?", content: "Да, академия включает все необходимые знания — от правил безопасности и работы с рисками до стратегий инвестирования. Вы сможете применять их, следуя нашим гайдам и инструкциям." },
    { title: "Будут ли отвечать на мои вопросы?", content: "Да, вы можете задавать вопросы в чате. Вам будут помогать не только кураторы курса, но и опытные криптоинвесторы, которые успешно зарабатывают на криптовалюте." },
  ];

  return (
    <div className={styles.page_faq}>
      <h1>FAQ</h1>
      <div className={styles.accordion}>
        {data.map((item, index) => (
        <Faq
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openId === index}
          onToggle={() => setOpenId(openId === index ? null : index)}
        />
      ))}
      </div>
    </div>
  );
}
