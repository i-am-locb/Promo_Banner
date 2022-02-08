import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNum,
  setPhoneNumber,
} from "../../../../../Redux/Reducers/PhoneNumber/PhoneNumber_reducer";
import { IRootState } from "../../../../../Redux/Store";
import styles from "./PromoNumberKeyboardCOPY.module.css";

  // @ts-ignore
import {Focusable} from "react-js-spatial-navigation-swapnil";

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
    const onKeyDown = (e: any) => {
      switch (e.keyCode) {
        case 8: {
          remove();
          setIsButtonClicked(false);
          break;
        }
      }
    };
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
        <Focusable 
          onClickEnter={() => onClick(1)}
          className={
            styles.promoNumber_Keyboard__one &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(1)} tabIndex={1}>
            1
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(2)}
          className={
            styles.promoNumber_Keyboard__two &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(2)} tabIndex={2}>
            2
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(3)}
          className={
            styles.promoNumber_Keyboard__three &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(3)} tabIndex={3}>
            3
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(4)}
          className={
            styles.promoNumber_Keyboard__four &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(4)} tabIndex={4}>
            4
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(5)}
          className={
            styles.promoNumber_Keyboard__five &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(5)} tabIndex={5}>
            5
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(6)}
          className={
            styles.promoNumber_Keyboard__six &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(6)} tabIndex={6}>
            6
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(7)}
          className={
            styles.promoNumber_Keyboard__seven &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(7)} tabIndex={7}>
            7
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(8)}
          className={
            styles.promoNumber_Keyboard__eight &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(8)} tabIndex={8}>
            8
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(9)}
          className={
            styles.promoNumber_Keyboard__nine &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(9)} tabIndex={9}>
            9
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => onClick(0)}
          className={
            styles.promoNumber_Keyboard__zero &&
            styles.promoNumber_Keyboard__item
          }
        >
          <div onClick={() => onClick(0)} tabIndex={10}>
            0
          </div>
        </Focusable>
        <Focusable
          className={
            styles.promoNumber_Keyboard__backspace
          }
          onClickEnter={() => {
            remove();
            setIsButtonClicked(false);
          }}
        >
          <div
            onClick={() => {
              remove();
              setIsButtonClicked(false);
            }}
            tabIndex={11}
          >
            СТЕРЕТЬ
          </div>
        </Focusable>
      </div>
  );
};

{
  /* <button ref={(element) => { if (element) element.focus(); }} type="text" onClick={e => alert('button clicked')}>Button sample</button> */
}
