import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../../../../Redux/Reducers/PhoneNumber/PhoneNumber_reducer";
import { IRootState } from "../../../../../Redux/Store";
import styles from "./PromoNumberAcceptButton.module.css";

type Props = {
  isAccepted: boolean;
  isFullNumber: boolean;
  setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNumberAcceptButton: React.FC<Props> = ({
  isAccepted,
  isFullNumber,
  setIsButtonClicked,
}) => {
  let number = useSelector((state: IRootState) => state.Number.number);
  const dispatch = useDispatch();

  const accept = () => {
    dispatch(validate(number.join("")));
  };

  return (
    <button
      className={
        isAccepted && isFullNumber
          ? styles.promoNumber_AcceptButtonAccepted
          : styles.promoNumber_AcceptButtonDisabled
      }
      disabled={!isAccepted && !isFullNumber}
      onClick={() =>{
        accept()
        setIsButtonClicked(true)
      } }
    >
      ПОТВЕРДИТЬ НОМЕР
    </button>
  );
};
