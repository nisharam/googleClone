// here using react context api which uses data layer to push the information and pull the information from the internet.
import React , { createContext , useContext, useReducer} from "react";

//preparing the data layer.
export const StateContext = createContext();

//reducer listens to the changes.
// initialState is the inital format of data
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
    {children}
    </StateContext.Provider>
);

// this is the hook which helps us to pull the information from the data layer.
export const useStateValue = () => useContext(StateContext);
