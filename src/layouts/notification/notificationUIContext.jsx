import { initialParamsTable } from "./notificationShareVar";

const { createContext, useContext, useState } = require("react");

const NotificationUIContext = createContext();

export function useNotificationUIContext() {
  return useContext(NotificationUIContext);
}

export const NotificationUIConsumer = NotificationUIContext.Consumer;

export function NotificationUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <NotificationUIContext.Provider value={value}>{children}</NotificationUIContext.Provider>;
}
