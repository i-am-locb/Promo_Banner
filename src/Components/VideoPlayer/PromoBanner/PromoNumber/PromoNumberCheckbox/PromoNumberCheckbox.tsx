import styles from './PromoNumberCheckbox.module.css'

type Props = {
  setIsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
};


export const PromoNumberCheckbox: React.FC<Props> =({setIsAccepted}) => {
    return (
        <label className={styles.promoNumber_AcceptDataProtection}>
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
    )
}