import { useDispatch, useSelector } from "react-redux";
import {
  unValid,
  valid,
} from "../../../Redux/Reducers/PhoneNumber/PhoneNumber_reducer";
import { IRootState } from "../../../Redux/Store";
import styles from "./Button.module.css";

export const Button = () => {
  const dispatch = useDispatch();
  const isValid = useSelector((state: IRootState) => state.Number.isValid);
  const onClick = () => {
    isValid ? dispatch(unValid()) : dispatch(valid());
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Эта кнопка насильно показывает финальное окно, поскольку GH-PAGES не
        позволяет сделать запрос на http протокол и не верифицирует номер,
        соответсвенно окно не может появиться. А там каруселька :)
      </p>
      <button className={styles.button} onClick={() => onClick()}>
        *ТЫК*
      </button>
    </div>
  );
};
