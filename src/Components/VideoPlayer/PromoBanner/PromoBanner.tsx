import { useState } from "react";
import styles from "./PromoBanner.module.css";
import { PromoExit } from "./PromoExit/PromoExit";
import { PromoNotification } from "./PromoNotification/PromoNotification";
import { PromoNumber } from "./PromoNumber/PromoNumber";
import { PromoQR } from "./PromoQR/PromoQR";

type Props = {
  isOpen: boolean;
  showAlert: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoBanner: React.FC<Props> = ({isOpen, showAlert,toggleIsOpen, setShowAlert}) => {

  return (
    <div className={!isOpen? styles.promoContainerOpened : styles.promoContainerClosed}>
      <PromoNotification isOpen={isOpen} showAlert={showAlert} toggleIsOpen={toggleIsOpen} setShowAlert={setShowAlert}/>
      <PromoExit isOpen={isOpen} toggleIsOpen={toggleIsOpen} setShowAlert={setShowAlert}/>
      <PromoNumber isOpen={isOpen} />
      <PromoQR isOpen={isOpen} />
    </div>
  );
}
