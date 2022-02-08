import React from "react";
import styles from "./PromoExit.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoExit: React.FC<Props> = ({
  isOpen,
  toggleIsOpen,
  setShowAlert,
}) => {
  return (
    <button
      onClick={() => {
        toggleIsOpen(false);
        setShowAlert(true);
      }}
      className={styles.promoExitButton}
      style={isOpen ? { right: 20 } : { right: -140 }}
    ></button>
  );
};
