import React, { createContext, useState, useContext } from 'react';

const ServerAddressContext = createContext();

export const useServerAddress = () => {
  return useContext(ServerAddressContext);
};

export const ServerAddressProvider = ({ children }) => {
  const [serverAddress, setServerAddress] = useState("");

  const updateServerAddress = (address) => {
    setServerAddress(address);
  };

  return (
    <ServerAddressContext.Provider value={{ serverAddress, updateServerAddress }}>
      {children}
    </ServerAddressContext.Provider>
  );
};
