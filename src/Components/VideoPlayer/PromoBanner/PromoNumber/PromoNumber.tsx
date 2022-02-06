import React from "react";
import styles from "./PromoNumber.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNumber: React.FC<Props> = ({isOpen, toggleIsOpen}) => {
  return (
    <div
      className={styles.promoNumber}
      style={isOpen ? { left: 0 } : { left: -400 }}
    >
      Тут ввод номера
    </div>
  );
};
