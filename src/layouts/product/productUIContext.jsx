import { initialParamsTable } from "./productShareVar";

const { createContext, useContext, useState } = require("react");

const ProductUIContext = createContext();

export function useProductUIContext() {
  return useContext(ProductUIContext);
}

export const ProductUIConsumer = ProductUIContext.Consumer;

export function ProductUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <ProductUIContext.Provider value={value}>{children}</ProductUIContext.Provider>;
}
