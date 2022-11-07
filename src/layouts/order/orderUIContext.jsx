import { initialParamsTable } from "_shareVar";

const { createContext, useContext, useState } = require("react");

const OrderUIContext = createContext();

export function useOrderUIContext() {
  return useContext(OrderUIContext);
}

export const OrderUIConsumer = OrderUIContext.Consumer;

export function OrderUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <OrderUIContext.Provider value={value}>{children}</OrderUIContext.Provider>;
}
