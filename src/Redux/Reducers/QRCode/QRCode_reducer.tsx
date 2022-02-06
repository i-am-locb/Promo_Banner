//Заготовка на случай если необходимо тянуть QR откуда-то

import QRCode from "../../../Images/QRCode.png";

export type InitialStateType = {
  QRCodeIMG: string;
};

let initialState: InitialStateType = {
  QRCodeIMG: QRCode,
};

const QRCode_reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default QRCode_reducer;
