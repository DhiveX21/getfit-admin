import { initialParamsTable } from "./medicalRecordShareVar";

const { createContext, useContext, useState } = require("react");

const MedicalRecordUIContext = createContext();

export function useMedicalRecordUIContext() {
  return useContext(MedicalRecordUIContext);
}

export const MedicalRecordUIConsumer = MedicalRecordUIContext.Consumer;

export function MedicalRecordUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return (
    <MedicalRecordUIContext.Provider value={value}>{children}</MedicalRecordUIContext.Provider>
  );
}
