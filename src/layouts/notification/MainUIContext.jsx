import { useDispatch } from "react-redux";
import { initialParamsTable } from "./notificationShareVar";
import * as actions from "layouts/notification/MainAction";
import { patientAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";

const { createContext, useContext, useState, useEffect } = require("react");

const MainUIContext = createContext();

export function useMainUIContext() {
  return useContext(MainUIContext);
}

export const MainUIConsumer = MainUIContext.Consumer;

export function MainUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const [patientData, setPatientData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.datatableAction(queryParams));
  }, [queryParams]);

  useEffect(() => {
    patientAPI
      .getAll()
      .then((response) => {
        setPatientData(response.data.data);
      })
      .catch((error) => {
        alertError("Can't show list patient");
      });
    dispatch(actions.categoryAction());
  }, []);

  const value = {
    queryParams,
    setQueryParams,
    patientData,
    setPatientData,
  };

  return <MainUIContext.Provider value={value}>{children}</MainUIContext.Provider>;
}
