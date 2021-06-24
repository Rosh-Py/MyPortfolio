import React, { useContext, useReducer } from "react";
import reducer from '../reducers/global'

const GlobalContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
}
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  const closeSidebar = () => {
    dispatch({type: 'CLOSE_SIDEBAR'});
  }
  const openSidebar = () => {
    dispatch({type: 'OPEN_SIDEBAR'});
  }
  return (
    <GlobalContext.Provider value={{...state, closeSidebar, openSidebar}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};