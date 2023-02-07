import { useDispatch } from "react-redux";
import { initialParamsTable } from "./medicalRecordShareVar";
import * as actions from "layouts/medicalRecord/MainAction";
import { appointmentAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";

const { createContext, useContext, useState, useEffect } = require("react");

const MainUIContext = createContext();

export function useMainUIContext() {
  return useContext(MainUIContext);
}

export const MainUIConsumer = MainUIContext.Consumer;

export function MainUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const [appointmentData, setAppointmentData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    appointmentAPI
      .getAll()
      .then((response) => {
        setAppointmentData(response.data.data);
      })
      .catch((err) => {
        err.clientMessage = "Something went wrong";
        alertError("Can't show appointments");
        throw new Error(err.response.status);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(actions.datatableAction(queryParams));
  }, [queryParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    queryParams,
    setQueryParams,
    appointmentData,
    setAppointmentData,
  };

  return <MainUIContext.Provider value={value}>{children}</MainUIContext.Provider>;
}
