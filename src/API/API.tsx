import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://apilayer.net/api",
});

export const validateAPI = {
  validateNumber(number:string) {
    return instance.get(`validate?access_key=03e6df0115882c99c7f7ca2761a6f9a0&number=7` + number).then((response:any) => {
      return response.data;
    });
  },
};