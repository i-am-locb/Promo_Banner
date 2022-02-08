import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://apilayer.net/api",
});

export const validateAPI = {
  validateNumber(number:string) {
    return instance.get(`validate?access_key=b13b26fe4a610a62efb00048d63686c1&number=7` + number).then((response:any) => {
      return response.data;
    });
  },
};