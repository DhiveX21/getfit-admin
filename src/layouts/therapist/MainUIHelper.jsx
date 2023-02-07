import { dateFormater } from "helpers/DateHelpers";

export const requestFormat = (data) => {
  return {
    name: data.fullname,
    phone_number: data.phoneNumber,
    email: data.email,
    password: data.password,
    gender: data.gender,
    position: data.position,
  };
};

export const requestFormatUpdate = (data) => {
  return {
    name: data.fullname,
    phone_number: data.phoneNumber,
    email: data.email,
    gender: data.gender,
    position: data.position,
  };
};
