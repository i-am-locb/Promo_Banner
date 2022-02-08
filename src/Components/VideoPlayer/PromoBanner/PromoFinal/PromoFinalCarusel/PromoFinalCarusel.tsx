import { useState } from "react";
import styles from "./PromoFinalCarusel.module.css";
import img1 from "../../../../../Images/Carusel/img1.jpg";
import img2 from "../../../../../Images/Carusel/img2.jpg";
import img3 from "../../../../../Images/Carusel/img3.jpg";
import img4 from "../../../../../Images/Carusel/img4.jpg";
import img5 from "../../../../../Images/Carusel/img5.jpg";
import img6 from "../../../../../Images/Carusel/img6.jpg";
import { Image } from "./Image";

export const PromoFinalCarusel = () => {
  let caruselArr = [
    <Image src={img1} />,
    <Image src={img2} />,
    <Image src={img3} />,
    <Image src={img4} />,
    <Image src={img5} />,
    <Image src={img6} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (caruselArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (caruselArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className={styles.promoFinalCarusel}>
      {caruselArr.map((item, index) => {
        return (
          <div
            key={index}
            className={styles.promoFinalCarusel_Item}
            style={{ transform: `translatex(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button
        onClick={() => goLeft()}
        className={styles.promoFinalCarusel_ArrowLeft}
      ></button>
      <button
        onClick={() => goRight()}
        className={styles.promoFinalCarusel_ArrowRight}
      ></button>
    </div>
  );
};
