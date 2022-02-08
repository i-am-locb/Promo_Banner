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

export const PromoNumberKeyboard: React.FC<Props> = ({
  setIsFullNumber,
  setIsButtonClicked,
}) => {
  let number = useSelector((state: IRootState) => state.Number.number);
  const dispatch = useDispatch();

  useEffect(() => {
    if (number.length == 10) {
      setIsFullNumber(true);
    } else {
      setIsFullNumber(false);
    }
  }, [number]);

  useEffect(() => {
    const onKeypress = (e: any) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 48: {
          onClick(0);
          break;
        }
        case 49: {
          onClick(1);
          break;
        }
        case 50: {
          onClick(2);
          break;
        }
        case 51: {
          onClick(3);
          break;
        }
        case 52: {
          onClick(4);
          break;
        }
        case 53: {
          onClick(5);
          break;
        }
        case 54: {
          onClick(6);
          break;
        }
        case 55: {
          onClick(7);
          break;
        }
        case 56: {
          onClick(8);
          break;
        }
        case 57: {
          onClick(9);
          break;
        }
      }
    };
    const onKeyDown = (e:any) => {
      console.log(e.keyCode)
      switch (e.keyCode) {
        case 8: {
          remove()
          setIsButtonClicked(false);
          break;
        }
      }
    }
    document.addEventListener("keypress", onKeypress);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keypress", onKeypress);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [number]);

  const onClick = (num: number) => {
    // debugger
    if (number.length < 10) {
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
      ref={(element) => { if (element) element.focus(); }}
        className={styles.promoNumber_Keyboard__one}
        onClick={() => onClick(1)}
        tabIndex={1}
      >
        1
      </div>
      <div
      ref={(element) => { if (element) element.focus(); }}
        className={styles.promoNumber_Keyboard__two}
        onClick={() => onClick(2)}
        tabIndex={2}
      >
        2
      </div>
      <div
      ref={(element) => { if (element) element.focus(); }}
        className={styles.promoNumber_Keyboard__three}
        onClick={() => onClick(3)}
        tabIndex={3}
      >
        3
      </div>
      <div
        className={styles.promoNumber_Keyboard__four}
        onClick={() => onClick(4)}
        tabIndex={4}
      >
        4
      </div>
      <div
        className={styles.promoNumber_Keyboard__five}
        onClick={() => onClick(5)}
        tabIndex={5}
      >
        5
      </div>
      <div
        className={styles.promoNumber_Keyboard__six}
        onClick={() => onClick(6)}
        tabIndex={6}
      >
        6
      </div>
      <div
        className={styles.promoNumber_Keyboard__seven}
        onClick={() => onClick(7)}
        tabIndex={7}
      >
        7
      </div>
      <div
        className={styles.promoNumber_Keyboard__eight}
        onClick={() => onClick(8)}
        tabIndex={8}
      >
        8
      </div>
      <div
        className={styles.promoNumber_Keyboard__nine}
        onClick={() => onClick(9)}
        tabIndex={9}
      >
        9
      </div>
      <div
        className={styles.promoNumber_Keyboard__zero}
        onClick={() => onClick(0)}
        tabIndex={10}
      >
        0
      </div>
      <div
        className={styles.promoNumber_Keyboard__backspace}
        onClick={() => {
          remove();
          setIsButtonClicked(false);
        }}
        tabIndex={11}
      >
        СТЕРЕТЬ
      </div>
    </div>
  );
};

{/* <button ref={(element) => { if (element) element.focus(); }} type="text" onClick={e => alert('button clicked')}>Button sample</button> */}