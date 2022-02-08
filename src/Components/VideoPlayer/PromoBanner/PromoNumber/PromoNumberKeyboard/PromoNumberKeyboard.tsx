import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNum,
  setPhoneNumber,
} from "../../../../../Redux/Reducers/PhoneNumber/PhoneNumber_reducer";
import { IRootState } from "../../../../../Redux/Store";
import styles from "./PromoNumberKeyboard.module.css";

type Props = {
  setIsFullNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromoNumberKeyboard: React.FC<Props> = ({setIsFullNumber, setIsButtonClicked}) => {
  let number = useSelector((state: IRootState) => state.Number.number);
  const dispatch = useDispatch();

  useEffect(() => {
    if(number.length == 10) {
      setIsFullNumber(true)
    } else {
      setIsFullNumber(false)
    }
  },[number]);

  const onClick = (e: any) => {
    if (number.length < 10) {
      let num: number = Number(e.target.innerText);
      dispatch(setPhoneNumber(num));
    } else {
      alert("Введено максимальное кол-во символов");
    }
  };
  const remove = () => {
    dispatch(deleteNum());
  };

  return (
    <div className={styles.promoNumber_Keyboard}>
      <div
        className={styles.promoNumber_Keyboard__one}
        onClick={(e) => onClick(e)}
      >
        1
      </div>
      <div
        className={styles.promoNumber_Keyboard__two}
        onClick={(e) => onClick(e)}
      >
        2
      </div>
      <div
        className={styles.promoNumber_Keyboard__three}
        onClick={(e) => onClick(e)}
      >
        3
      </div>
      <div
        className={styles.promoNumber_Keyboard__four}
        onClick={(e) => onClick(e)}
      >
        4
      </div>
      <div
        className={styles.promoNumber_Keyboard__five}
        onClick={(e) => onClick(e)}
      >
        5
      </div>
      <div
        className={styles.promoNumber_Keyboard__six}
        onClick={(e) => onClick(e)}
      >
        6
      </div>
      <div
        className={styles.promoNumber_Keyboard__seven}
        onClick={(e) => onClick(e)}
      >
        7
      </div>
      <div
        className={styles.promoNumber_Keyboard__eight}
        onClick={(e) => onClick(e)}
      >
        8
      </div>
      <div
        className={styles.promoNumber_Keyboard__nine}
        onClick={(e) => onClick(e)}
      >
        9
      </div>
      <div
        className={styles.promoNumber_Keyboard__zero}
        onClick={(e) => onClick(e)}
      >
        0
      </div>
      <div
        className={styles.promoNumber_Keyboard__backspace}
        onClick={() => {
          remove()
          setIsButtonClicked(false)
        }}
      >
        СТЕРЕТЬ
      </div>
    </div>
  );
};
