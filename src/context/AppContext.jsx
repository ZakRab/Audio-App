import React, { useCallback, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = React.createContext(null);
export function AppProvider(props) {
  const [user, setUser] = useState("");
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  );
}
