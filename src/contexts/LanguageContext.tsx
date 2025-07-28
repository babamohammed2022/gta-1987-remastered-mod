import React, { createContext, useContext } from "react";

const LanguageContext = createContext({
  t: (key: string) => key, // dummy translation function returns the key as-is
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ t: (key: string) => key }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
