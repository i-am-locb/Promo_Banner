import styles from "./PromoFinal.module.css";
import { PromoFinalCarusel } from "./PromoFinalCarusel/PromoFinalCarusel";

type Props = {
  isValid: boolean;
};

export const PromoFinal: React.FC<Props> = ({ isValid }) => {
  return (
    <div
      className={styles.promoFinal}
      style={
        isValid
          ? { width: "854px", height: "480px" }
          : { width: "0", height: "0" }
      }
    >
      <h1 className={styles.promoFinal_Title}>ЗАЯВКА ПРИНЯТА</h1>
      <h3 className={styles.promoFinal_SubTitle}>
        Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.{" "}
      </h3>
      <PromoFinalCarusel />
    </div>
  );
};
