import React from "react";
import styles from "./PromoNotification.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNotification: React.FC<Props> = ({isOpen, toggleIsOpen}) => {
  return (
    <div onClick={() => toggleIsOpen(true)} className={styles.popupAlert} style={isOpen? {right: -300} : {right: 0}}>
      Предложение вылазит через 5 секунд со старта видео
    </div>
  );
};
