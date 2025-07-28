// src/contexts/LanguageContext.tsx

import React from "react";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>; // Just render children, no context
};

export const useLanguage = () => {
  // Return a dummy `t` function that returns the key as-is
  return {
    t: (key: string) => key,
  };
};

