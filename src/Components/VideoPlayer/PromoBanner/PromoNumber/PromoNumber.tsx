import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../Redux/Store";
import { PromoFinal } from "../PromoFinal/PromoFinal";
import styles from "./PromoNumber.module.css";
import { PromoNumberAcceptButton } from "./PromoNumberAcceptNutton/PromoNumberAcceptButton";
import { PromoNumberCheckbox } from "./PromoNumberCheckbox/PromoNumberCheckbox";
import { PromoNumberInput } from "./PromoNumberInput/PromoNumberInput";
import { PromoNumberKeyboard } from "./PromoNumberKeyboard/PromoNumberKeyboard";

type Props = {
  isOpen: boolean;
};

export const PromoNumber: React.FC<Props> = ({ isOpen }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isFullNumber, setIsFullNumber] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isValid = useSelector((state: IRootState) => state.Number.isValid);
  console.log(isValid);

  return (
    <>
      {isValid ? (
        <PromoFinal isValid={isValid}/>
      ) : (
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
          <PromoNumberKeyboard
            setIsFullNumber={setIsFullNumber}
            setIsButtonClicked={setIsButtonClicked}
          />
          <PromoNumberCheckbox
            setIsAccepted={setIsAccepted}
            isButtonClicked={isButtonClicked}
          />
          <PromoNumberAcceptButton
            isAccepted={isAccepted}
            isFullNumber={isFullNumber}
            setIsButtonClicked={setIsButtonClicked}
          />
        </div>
      )}
    </>
  );
};
