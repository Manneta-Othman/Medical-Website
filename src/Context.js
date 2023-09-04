import React, { useState, createContext, useContext, useEffect } from 'react'

const DataContext = createContext();

export function UseDataContext() {
  return useContext(DataContext)
}


export  function ProvideDataContext({children}) {


return (
  <DataContext.Provider value={{}}>
    {children}
  </DataContext.Provider>
)
}