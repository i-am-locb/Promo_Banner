import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../Redux/Store";
import styles from "./PromoNotification.module.css";

type Props = {
  isOpen: boolean;
  showAlert: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNotification: React.FC<Props> = ({
  isOpen,
  showAlert,
  toggleIsOpen,
  setShowAlert,
}) => {
  const QRCode = useSelector((state: IRootState) => state.QRCode.QRCodeIMG);

  return (
    <div
      className={styles.popupAlert}
      style={!showAlert ? { right: -251 } : { right: 0 }}
    >
      <h1 className={styles.popupAlert_title}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h1>
      <img className={styles.popupAlert_QRCode} src={QRCode} />
      <h3 className={styles.popupAlert_subTitle}>
        Сканируйте QR-код или нажмите ОК
      </h3>
      <button
        onClick={() => {
          toggleIsOpen(true)
          setShowAlert(false)
        }}
        className={styles.popupAlert_accept}
      >
        OK
      </button>
    </div>
  );
};
