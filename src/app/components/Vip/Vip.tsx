import Link from "next/link";
import style from "./vip.module.css";

export function Vip() {
  return (
    <div className={style.container}>
      <h1><span>VIP-КЛУБ</span> ПОСЛЕ ОБУЧЕНИЯ</h1>
      <div className={style.title_text}>
        <p>После прохождения базового обучения вы попадаете в наш закрытый</p>
        <p>VIP-клуб <span>с сигналами и аналитикой</span>. Там вы также под присмотром</p>
        <p>экспертов начинаете применять свои знания и навыки на практике.</p>
      </div>
    </div>
  );
}