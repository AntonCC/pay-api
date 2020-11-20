import React, { useState, createContext } from 'react'

export const WidthContext = createContext() 

export const WidthProvider = props => {
  const [width, setWidth] = useState()

  return (
    <WidthContext.Provider value={[width, setWidth]}>
      { props.children }
    </WidthContext.Provider>
  )
}