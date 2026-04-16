import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (type, friendName) => {
    const newInteraction = {
      id: Date.now(), 
      type: type,    
      friendName: friendName,
      date: new Date().toLocaleString(),
    };
    
    setTimeline([newInteraction, ...timeline]);
    
    toast.success(`${type} logged with ${friendName}!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <AppContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </AppContext.Provider>
  );
}