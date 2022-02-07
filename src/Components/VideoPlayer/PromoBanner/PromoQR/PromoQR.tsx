import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../Redux/Store";
import styles from "./PromoQR.module.css";

type Props = {
  isOpen: boolean;
  toggleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoQR: React.FC<Props> = ({ isOpen }) => {
  const QRCode = useSelector((state: IRootState) => state.QRCode.QRCodeIMG);
  return (
    <div
      className={styles.popupQR}
      style={isOpen ? { right: 20 } : { right: -314 }}
    >
      <h1 className={styles.popupQR_Title}>
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </h1>

      <img className={styles.popupQR_QRCode} src={QRCode} />
    </div>
  );
};
