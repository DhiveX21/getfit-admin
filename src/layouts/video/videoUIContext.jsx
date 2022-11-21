import { initialParamsTable } from "./videoShareVar";

const { createContext, useContext, useState } = require("react");

const VideoUIContext = createContext();

export function useVideoUIContext() {
  return useContext(VideoUIContext);
}

export const VideoUIConsumer = VideoUIContext.Consumer;

export function VideoUIProvider({ children }) {
  const [queryParams, setQueryParams] = useState(initialParamsTable);
  const value = {
    queryParams,
    setQueryParams,
  };

  return <VideoUIContext.Provider value={value}>{children}</VideoUIContext.Provider>;
}
