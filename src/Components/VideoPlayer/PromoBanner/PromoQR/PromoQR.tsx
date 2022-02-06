import React from "react";
import styles from "./PromoQR.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoQR: React.FC<Props> = ({isOpen, toggleIsOpen}) => {
  return (
    <div
      className={styles.popupQR}
      style={isOpen ? { right: 0 } : { right: -300 }}
    >
      qr code
    </div>
  );
};
