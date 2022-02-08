import { validateAPI } from "../../../API/API";

const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
const DELETE_NUM = "DELETE_NUM";
const VALID = "VALID";
const UN_VALID = "UN_VALID";

//TODO если указать этот тип для action combineReducers выдает тип never для редусера
type ActionType = {
  type: string;
  num?: number;
};

type InitialStateType = {
  number: number[];
  isValid: boolean;
};

let initialState: InitialStateType = {
  number: [],
  isValid: false,
};

const PhoneNumber_reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return {
        ...state,
        number: [...state.number, action.num],
      };
    case DELETE_NUM:
      return {
        ...state,
        number: state.number.slice(0, -1),
      };
    case VALID:
      return {
        ...state,
        isValid: true,
      };
      case UN_VALID:
        return {
          ...state,
          isValid: false,
        };
    default:
      return state;
  }
};

export const setPhoneNumber = (num: number) => ({
  type: SET_PHONE_NUMBER,
  num,
});

export const valid = () => ({ type: VALID });
export const unValid = () => ({ type: UN_VALID });

export const deleteNum = () => ({ type: DELETE_NUM });

export const validate = (number: string) => (dispatch:any) => {
  validateAPI.validateNumber(number).then((response) => {
    if (response.valid) {
      dispatch(valid())
    }else{
      dispatch(unValid())
    }
  });
};

export default PhoneNumber_reducer;
