import { debug } from "console";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../Redux/Store";
import styles from "./PromoNumberInput.module.css";

export const PromoNumberInput = () => {
  let number = useSelector((state: IRootState) => state.Number.number);
  let num = "";
  for (let i = 0; i < number.length; i++) {
    num = num + number[i]
  }
  let [numberUI, setNumberUI] = useState("");
  useEffect(() => {
    //TODO переписать эту лажу, RegExp????
    let a = num[0] ? num[0] : "_";
    let b = num[1] ? num[1] : "_";
    let c = num[2] ? num[2] : "_";
    let d = num[3] ? num[3] : "_";
    let e = num[4] ? num[4] : "_";
    let f = num[5] ? num[5] : "_";
    let g = num[6] ? num[6] : "_";
    let h = num[7] ? num[7] : "_";
    let i = num[8] ? num[8] : "_";
    let j = num[9] ? num[9] : "_";
    setNumberUI(
      "+7(" + a + b + c + ")" + d + e + f + "-" + g + h + "-" + i + j
    );
  });

  return <p className={styles.promoNumber_Number}>{numberUI}</p>;
};
