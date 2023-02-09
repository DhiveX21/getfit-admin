import { useDispatch } from "react-redux";
import { initialParamsTable } from "_shareVar";
import * as actions from "layouts/appointment/MainAction";
import { patientAPI, productAPI, therapistAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";

const { createContext, useContext, useState, useEffect } = require("react");

const MainUIContext = createContext();

export function useMainUIContext() {
  return useContext(MainUIContext);
}

export const MainUIConsumer = MainUIContext.Consumer;

export function MainUIProvider({ children }) {
  const [patientData, setPatientData] = useState();
  const [baseProductData, setBaseProductData] = useState();
  const [therapistData, setTherapistData] = useState();
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.datatableAction(queryParams));
    productAPI
      .getAllMaster()
      .then((response) => {
        setBaseProductData(response.data.data);
      })
      .catch((error) => {
        alertError("Error Get Base Product Data");
      });
    therapistAPI
      .getAll()
      .then((response) => {
        setTherapistData(response.data.data);
      })
      .catch((error) => {
        alertError("Error Get Therapist Data");
      });
    patientAPI
      .getAll()
      .then((response) => {
        setPatientData(response.data.data);
      })
      .catch((error) => {
        alertError("Error Get Patient Data");
      });
  }, [queryParams]);

  const value = {
    queryParams,
    setQueryParams,
    patientData,
    setPatientData,
    baseProductData,
    setBaseProductData,
    therapistData,
    setTherapistData,
  };

  return <MainUIContext.Provider value={value}>{children}</MainUIContext.Provider>;
}
