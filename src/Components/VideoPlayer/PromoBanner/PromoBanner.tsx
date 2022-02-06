import { useRef } from "react";
import styles from "./PromoBanner.module.css";
export function PromoBanner() {
  const pop = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLDivElement>(null);
  const qr = useRef<HTMLDivElement>(null);
  const exit = useRef<HTMLButtonElement>(null)

  console.log(pop);

  const slide = () => {
    if (pop && pop.current) {
      //TODO узнать правильно ли так писать
      pop.current.style.right = "0";
    }
  };
  const showNum = () => {
    if (num && num.current && pop && pop.current && exit && exit.current && qr && qr.current) {
      pop.current.style.right = "-300px";
      num.current.style.left = "0";
      exit.current.style.right = "70px";
      qr.current.style.right = "0";
    }
  };

  const exitNum = () => {
    if (num && num.current && pop && pop.current && exit && exit.current && qr && qr.current) {
      pop.current.style.right = "0";
      num.current.style.left = "-400px";
      exit.current.style.right = "-140px";
      qr.current.style.right = "-300px";
    }
  }

  return (
    <div className={styles.promoContainer}>
      <div ref={pop} onClick={() => showNum()} className={styles.popupAlert}>
        Предложение вылазит через 5 секунд со старта видео
      </div>
      <div ref={qr} onClick={() => showNum()} className={styles.popupQR}>
        qr code
      </div>
      <div ref={num} className={styles.popupNumber}>
        Тут ввод номера
      </div>
      <button ref={exit} onClick={() => exitNum()} className={styles.exitButton}></button>
    </div>
  );
}
