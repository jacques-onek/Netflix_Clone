import { createContext, useState, ReactNode } from "react";


interface NavBarContextType {
  isOpen: boolean;
  toggle: () => void;
  search: string;
  handleSearch: (query:string) => void;
}
// Crée le contexte à l'extérieur du composant
const NavBarContext = createContext<NavBarContextType|undefined>(undefined!);



interface NavBarContextProviderProps {
  children: ReactNode;
}


type searchType = (query:string) => void

const NavBarContextProvider = ({ children }: NavBarContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch] = useState<string>('')

  // Fonction pour alterner l'état
  const toggle = () => setIsOpen((prev) => !prev);
  const handleSearch : searchType = (e) => setSearch(e);

  return (
    <NavBarContext.Provider value={{isOpen, toggle,search,handleSearch}}>
      {children}
    </NavBarContext.Provider>
  );
}

export { NavBarContext, NavBarContextProvider };
