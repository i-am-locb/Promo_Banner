import styles from "./PromoNumberAcceptButton.module.css";

type Props = {
  isAccepted: boolean;
  isFullNumber: boolean;
};

export const PromoNumberAcceptButton: React.FC<Props> = ({
  isAccepted,
  isFullNumber,
}) => {
  const accept = () => {
    console.log("click");
    console.log(isAccepted);
  };

  return (
    <button
      className={
        isAccepted && isFullNumber
          ? styles.promoNumber_AcceptButtonAccepted
          : styles.promoNumber_AcceptButtonDisabled
      }
      disabled={!isAccepted && !isFullNumber}
      onClick={() => accept()}
    >
      ПОТВЕРДИТЬ НОМЕР
    </button>
  );
};
