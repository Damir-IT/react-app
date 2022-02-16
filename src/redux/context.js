import React from 'react'

//context allows passing BLL logic directly to the container components bypassing the props
export const StoreContext = React.createContext(null)

export const ContextProvider = (props) => {
  //ConextProvider is wrapped around componentes that will be able to use the context
  return (
    <StoreContext.Provider value={props.store}>
      {/* component will be inserted here  */}
      {props.children}
    </StoreContext.Provider>
  )
}
