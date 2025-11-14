import React, { createContext, useContext, useState } from "react";

type NavigationContextType = {
  selectedArticleId: number | null;
  setSelectedArticleId: (id: number | null) => void;
  currentSection: string;
  setCurrentSection: (s: string) => void;
};

// avoid generic type argument issues by asserting the initial value
const NavigationContext = createContext((undefined as unknown) as NavigationContextType | undefined);

export function NavigationProvider({ children }: { children: any }) {
  const [selectedArticleId, setSelectedArticleId] = useState(null as number | null);
  const [currentSection, setCurrentSection] = useState("inicio");

  return (
    <NavigationContext.Provider
      value={{ selectedArticleId, setSelectedArticleId, currentSection, setCurrentSection }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
