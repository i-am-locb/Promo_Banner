import React, { useEffect, useState } from "react";
import styles from "./PromoNumber.module.css";
import { PromoNumberAcceptButton } from "./PromoNumberAcceptNutton/PromoNumberAcceptButton";
import { PromoNumberCheckbox } from "./PromoNumberCheckbox/PromoNumberCheckbox";
import { PromoNumberInput } from "./PromoNumberInput/PromoNumberInput";
import { PromoNumberKeyboard } from "./PromoNumberKeyboard/PromoNumberKeyboardCOPY";

  // @ts-ignore
import { FocusableSection} from "react-js-spatial-navigation-swapnil";
type Props = {
  isOpen: boolean;
};

export const PromoNumber: React.FC<Props> = ({ isOpen }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isFullNumber, setIsFullNumber] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
        <FocusableSection>
          <PromoNumberKeyboard
            setIsFullNumber={setIsFullNumber}
            setIsButtonClicked={setIsButtonClicked}
          />
        </FocusableSection>
        <FocusableSection>
          <PromoNumberCheckbox
            setIsAccepted={setIsAccepted}
            isButtonClicked={isButtonClicked}
          />
        </FocusableSection>
        <FocusableSection>
          <PromoNumberAcceptButton
            isAccepted={isAccepted}
            isFullNumber={isFullNumber}
            setIsButtonClicked={setIsButtonClicked}
          />
        </FocusableSection>
      </div>
  );
};
