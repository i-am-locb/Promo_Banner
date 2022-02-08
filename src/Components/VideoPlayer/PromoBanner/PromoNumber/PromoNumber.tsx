import React, { useEffect, useState } from "react";
import styles from "./PromoNumber.module.css";
import { PromoNumberAcceptButton } from "./PromoNumberAcceptNutton/PromoNumberAcceptButton";
import { PromoNumberCheckbox } from "./PromoNumberCheckbox/PromoNumberCheckbox";
import { PromoNumberInput } from "./PromoNumberInput/PromoNumberInput";
import { PromoNumberKeyboard } from "./PromoNumberKeyboard/PromoNumberKeyboard";

type Props = {
  isOpen: boolean;
};

export const PromoNumber: React.FC<Props> = ({ isOpen }) => {
  let [isAccepted, setIsAccepted] = useState(false);
  let [isFullNumber, setIsFullNumber] = useState(false);

  return (
    <div
      className={styles.promoNumber}
      style={isOpen ? { left: 0 } : { left: -380 }}
    >
      <h1 className={styles.promoNumber_Title}>
        Введите ваш номер мобильного телефона
      </h1>
      <PromoNumberInput />
      <h3 className={styles.promoNumber_SubTitle}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </h3>
      <PromoNumberKeyboard setIsFullNumber={setIsFullNumber} />
      <PromoNumberCheckbox setIsAccepted={setIsAccepted} />
      <PromoNumberAcceptButton isAccepted={isAccepted} isFullNumber={isFullNumber} />
    </div>
  );
};
