import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../Redux/Store";
import styles from "./PromoNumberCheckbox.module.css";

type Props = {
  isButtonClicked: boolean;
  setIsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNumberCheckbox: React.FC<Props> = ({
  setIsAccepted,
  isButtonClicked,
}) => {
  let isValid = useSelector((state: IRootState) => state.Number.isValid);

  return (
    <div>
      <div
        className={styles.promoNumber_AcceptDataProtection__Alarm}
        style={
          !isValid && isButtonClicked
            ? { display: "block" }
            : { display: "none" }
        }
      >
        Введите корректный номер!
      </div>
      <label
        className={styles.promoNumber_AcceptDataProtection}
        style={
          !isValid && isButtonClicked
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <input
          type={"checkbox"}
          className={styles.promoNumber_AcceptDataProtection__checkbox}
          onChange={() => setIsAccepted((actual) => !actual)}
        />
        <span className={styles.promoNumber_AcceptDataProtection__fake}></span>
        <span className={styles.promoNumber_AcceptDataProtection__text}>
          Согласие на обработку персональных данных
        </span>
      </label>
    </div>
  );
};

//
