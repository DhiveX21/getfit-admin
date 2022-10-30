import { initialParamsTable } from "_shareVar";

const { createContext, useContext, useState } = require("react");

const AppointmentUIContext = createContext();

export function useAppointmentUIContext() {
  return useContext(AppointmentUIContext);
}

export const AppointmentUIConsumer = AppointmentUIContext.Consumer;

export function AppointmentUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <AppointmentUIContext.Provider value={value}>{children}</AppointmentUIContext.Provider>;
}
