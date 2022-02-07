import React from "react";
import styles from "./PromoNumber.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNumber: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={styles.promoNumber}
      style={isOpen ? { left: 0 } : { left: -380 }}
    >
      <h1 className={styles.promoNumber_Title}>
        Введите ваш номер мобильного телефона
      </h1>
      <p className={styles.promoNumber_Number}>+7(___)___-__-__</p>
      <h3 className={styles.promoNumber_SubTitle}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </h3>
      <div className={styles.promoNumber_Keyboard}>
        <div className={styles.promoNumber_Keyboard__one}>1</div>
        <div className={styles.promoNumber_Keyboard__two}>2</div>
        <div className={styles.promoNumber_Keyboard__three}>3</div>
        <div className={styles.promoNumber_Keyboard__four}>4</div>
        <div className={styles.promoNumber_Keyboard__five}>5</div>
        <div className={styles.promoNumber_Keyboard__six}>6</div>
        <div className={styles.promoNumber_Keyboard__seven}>7</div>
        <div className={styles.promoNumber_Keyboard__eight}>8</div>
        <div className={styles.promoNumber_Keyboard__nine}>9</div>
        <div className={styles.promoNumber_Keyboard__zero}>0</div>
        <div className={styles.promoNumber_Keyboard__backspace}>СТЕРЕТЬ</div>
      </div>
      <label className={styles.promoNumber_AcceptDataProtection}>
        <input type={"checkbox"} className={styles.promoNumber_AcceptDataProtection__checkbox}/>
        <span className={styles.promoNumber_AcceptDataProtection__fake}></span>
        <span className={styles.promoNumber_AcceptDataProtection__text}>Согласие на обработку персональных данных</span>
      </label>
      <button className={styles.promoNumber_AcceptButton}>
        ПОТВЕРДИТЬ НОМЕР
      </button>
    </div>
  );
};
