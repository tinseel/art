import Link from "next/link";
import Image from 'next/image'
import style from "./mentors.module.css";

export function Mentors() {
  return (
    <div className={style.container}>
      <h1>Наставники академии</h1>
      <div className={style.mentors}>
        <div className={style.profile}>
            <div className={style.logo}>
              <Image
                src="/one.png"
                width={330}
                height={330}
                alt="Picture of the author"
              />
            </div>
            <h2>Эксперт-практик</h2>
            <h2>Артем Халилов</h2>
            <p><span className={style.tegs}>Занимается криптовалютой с 2017 года,</span> попробовал все способы заработка от майнинга до инвестирования и арбитража криптовалюты.</p>
            <p>За 2017-2024 год увеличил капитал на криптовалюте в 10 раз<span className={style.tegs}> в 10 раз</span></p>
            <p><span className={style.tegs}>Имел 5 бизнесов,</span> но выгорел и решил уйти в криптовалюту, так как видел потенциал в этом инструменте</p>
            <p>Обеспечивает свою жизнь и путешествует только с дохода от крипты. <span className={style.tegs}>Посетил 40+ стран</span></p>
            <p><span className={style.tegs}>Обучил заработку на криптовалюте более 400+ учеников</span></p>
        </div>
        <div className={style.profile}>
            <div className={style.logo}>
              <Image
                src="/two.jpg"
                width={330}
                height={330}
                alt="Picture of the author"
              />
            </div>
            <h2>Эксперт-практик</h2>
            <h2>Артем Халилов</h2>
            <p>Аналитик венчурного фонда <span className={style.tegs}>YTWO VC</span></p>
            <p><span className={style.tegs}>6 лет</span> в рынке инвестиций и крипты</p>
            <p>Более <span className={style.tegs}>20 успешных кейсов</span> по ретродропам</p>
            <p>Глубокое понимание <span className={style.tegs}>DeFi сектора</span></p>
            <p>Обучил заработку на криптовалюте более <span className={style.tegs}>400+ учеников</span></p>
        </div>
        <div className={style.profile}>
            <div className={style.logo}>
              <Image
                src="/free.jpg"
                width={330}
                height={330}
                alt="Picture of the author"
              />
            </div>
            <h2>Эксперт-практик</h2>
            <h2>Андрей Тугарин</h2>
            <p>Основатель юридической компании <Link href="#" className={style.links}>GMT Legal</Link></p>
            <p>Эксперт в области правового регулирования <span className={style.tegs}>блокчейн технологий, криптовалют и WEB3 проектов.</span></p>
        </div>
      </div>
    </div>
  );
}