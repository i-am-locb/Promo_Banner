const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
const DELETE_NUM = "DELETE_NUM";

//TODO если указать этот тип для action combineReducers выдает тип never для редусера
type ActionType = {
  type: string;
  num?: number;
};

type InitialStateType = {
  number: number[];
};

let initialState: InitialStateType = {
  number: [],
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
        number: state.number.slice(0, -1)
      };
    default:
      return state;
  }
};

export const setPhoneNumber = (num: number) => ({
  type: SET_PHONE_NUMBER,
  num,
});

export const deleteNum = () => ({ type: DELETE_NUM });

export default PhoneNumber_reducer;
