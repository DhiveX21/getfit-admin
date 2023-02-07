import axios from "axios";
import { toast } from "react-toastify";
import { createMock } from "./ResponseMockTemplate";

export const alertSuccess = (title) => {
  toast.success(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const alertError = (title = "Something went wrong !") => {
  toast.error(title);
};

export const configAPIFacade = (URL, funcMock) => {
  const axiosMockInstance = axios.create();
  const axiosLiveInstance = axios.create();

  // env is null url can be redirect to url mock
  if (URL === undefined) {
    const mock = createMock(axiosMockInstance);
    funcMock(mock);
    URL = "api";
    return [
      axiosMockInstance,
      URL,
    ];
  } else {
    return [
      axiosLiveInstance,
      URL,
    ];
  }
};
