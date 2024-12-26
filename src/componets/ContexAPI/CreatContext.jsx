/* eslint-disable react/prop-types */
import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Grah";
  return <BioContext.Provider value={myName}>{children}</BioContext.Provider>;
};
