import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.page_left}>
          <div className={styles.logo}>
            <span>Крипто</span>
            <span className={styles.start}>старт</span>
          </div>
          <div className={styles.links}>
            <Link href="#">Договор-оферта</Link>
            <Link href="#">Соглашение об обработке персональных данных</Link>
            <span>© Криптостарт 2026</span>
          </div>
        </div>
        <div className={styles.page_right}>
          <div className={styles.contact}>
            <div className={styles.number}>
              <span>Номер телефона</span>
              <Link href="tel:+79365529211">+7(929) 655 11 75</Link>
            </div>
            <div className={styles.email}>
              <span>Почта</span>
              <Link href="mailto:info@invest-kurs.online">info@invest-kurs.online</Link>
            </div>
          </div>
          <div className={styles.social}>
            <Link className={styles.bnt} href="#">Занять место</Link>
            <div className={styles.links_social}>
              <Link href="https://t.me/ne_investor">
                <svg  
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" height="32"  
                  fill="currentColor" 
                  viewBox="0 0 24 24" >
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"></path>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/oleg_ipo">
                <svg  xmlns="http://www.w3.org/2000/svg" 
                  width="32" height="32"  
                  fill="currentColor" 
                  viewBox="0 0 24 24" >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008m4.807-8.875a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span>Ясюкевич Олег Михайлович</span>
        <span>ИНН 780100501699</span>
        <span>г. Москва</span>
      </div>
    </div>
  );
}

