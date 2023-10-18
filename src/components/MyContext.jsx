import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [visibleButtons, setVisibleButtons] = useState({
    home: true,
    attributeSelection: false,
    originSelection: false
  });

  return (
    <MyContext.Provider value={{ visibleButtons, setVisibleButtons }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
