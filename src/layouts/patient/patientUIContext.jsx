import { initialParamsTable } from "./patientShareVar";

const { createContext, useContext, useState } = require("react");

const PatientUIContext = createContext();

export function usePatientUIContext() {
  return useContext(PatientUIContext);
}

export const PatientUIConsumer = PatientUIContext.Consumer;

export function PatientUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <PatientUIContext.Provider value={value}>{children}</PatientUIContext.Provider>;
}
