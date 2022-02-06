import { useState } from "react";
import styles from "./PromoBanner.module.css";
import { PromoExit } from "./PromoExit/PromoExit";
import { PromoNotification } from "./PromoNotification/PromoNotification";
import { PromoNumber } from "./PromoNumber/PromoNumber";
import { PromoQR } from "./PromoQR/PromoQR";

export function PromoBanner() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <div className={styles.promoContainer}>
      <PromoNotification isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
      <PromoExit isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
      <PromoNumber isOpen={isOpen} />
      <PromoQR isOpen={isOpen} />
    </div>
  );
}
