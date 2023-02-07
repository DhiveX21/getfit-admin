import { initialParamsTable } from "./productShareVar";
import * as actions from "layouts/product/MainAction";
import { useDispatch } from "react-redux";

const { createContext, useContext, useState, useEffect } = require("react");

const MainUIContext = createContext();

export function useMainUIContext() {
  return useContext(MainUIContext);
}

export const MainUIConsumer = MainUIContext.Consumer;

export function MainUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.datatableAction(queryParams));
  }, [queryParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    queryParams,
    setQueryParams,
  };

  return <MainUIContext.Provider value={value}>{children}</MainUIContext.Provider>;
}
