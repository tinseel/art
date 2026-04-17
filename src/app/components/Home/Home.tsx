import Link from "next/link";
import Image from 'next/image'
import style from "./home.module.css";

export function AddPage() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>Криптостартап<br/> <span className={style.addColor}>через 3 недели</span></h1>
        <p>Академия, для тех <span className={style.addColor}>кто готов начать инвестировать,</span><br/> и хочет сделать это правильно</p>
        <Link href="#tarif">
          Занять место
        </Link>
        <span className={style.text}>Твой успешный путь в крипте <span className={style.addColor}>начинается здесь</span></span>
      </div>
      <div className={style.logo}>
        <Image
          src="/art.jpg"
          fill
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}