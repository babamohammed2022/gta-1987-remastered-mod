
import React, { createContext, useContext, ReactNode } from "react";

type LanguageContextType = {
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  t: (key: string) => key, // returns the key unchanged
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Dummy translation function that returns the input key unchanged
  const t = (key: string) => key;

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
