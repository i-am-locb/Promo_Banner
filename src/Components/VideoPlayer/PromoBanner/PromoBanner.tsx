import { useState } from "react";
import styles from "./PromoBanner.module.css";
import { PromoExit } from "./PromoExit/PromoExit";
import { PromoNotification } from "./PromoNotification/PromoNotification";
import { PromoNumber } from "./PromoNumber/PromoNumber";
import { PromoQR } from "./PromoQR/PromoQR";
import SpatialNavigation, {
  FocusableSection,
  // @ts-ignore
} from "react-js-spatial-navigation-swapnil";

type Props = {
  isOpen: boolean;
  showAlert: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoBanner: React.FC<Props> = ({
  isOpen,
  showAlert,
  toggleIsOpen,
  setShowAlert,
}) => {
  return (
      <SpatialNavigation
      className={
        !isOpen ? styles.promoContainerOpened : styles.promoContainerClosed
      }>
        <FocusableSection className={styles.overflowHidden}>
          <PromoNotification
            isOpen={isOpen}
            showAlert={showAlert}
            toggleIsOpen={toggleIsOpen}
            setShowAlert={setShowAlert}
          />
        </FocusableSection>
        <FocusableSection>
          <PromoExit
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            setShowAlert={setShowAlert}
          />
        </FocusableSection>
        <FocusableSection>
          <PromoNumber isOpen={isOpen} />
        </FocusableSection>
        <FocusableSection>
          <PromoQR isOpen={isOpen} />
        </FocusableSection>
      </SpatialNavigation>
  );
};
