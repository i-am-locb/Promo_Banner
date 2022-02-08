import React, { useEffect } from "react";
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
  useEffect(() => {
    const onKeyDown = (e: any) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 27: {
          toggleIsOpen(false);
          setShowAlert(true);
          break;
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

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
