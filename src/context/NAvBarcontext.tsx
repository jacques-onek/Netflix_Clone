import { createContext, useState, ReactNode } from "react";

// Crée le contexte à l'extérieur du composant
const NavBarContext = createContext<[boolean, () => void] | undefined>(undefined);

interface NavBarContextProviderProps {
  children: ReactNode;
}

const NavBarContextProvider = ({ children }: NavBarContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour alterner l'état
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <NavBarContext.Provider value={[isOpen, toggle]}>
      {children}
    </NavBarContext.Provider>
  );
}

export { NavBarContext, NavBarContextProvider };
