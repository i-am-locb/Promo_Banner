import React from "react";
import styles from "./PromoExit.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoExit: React.FC<Props> = ({isOpen, toggleIsOpen}) => {
  return (
    <button
      onClick={() => toggleIsOpen(false)}
      className={styles.promoExitButton}
      style={isOpen ? { right: 70 } : { right: -140 }}
    ></button>
  );
};