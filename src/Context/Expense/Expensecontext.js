import React,{createContext, useReducer} from 'react'
import ExpenseReducer from "./ExpenseReducer"
const initialState={
    todo:[],
}
export  const GlobalContext=createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state,dispatch]=useReducer(ExpenseReducer,initialState)
    const addExpence = (newExpence) => {
        dispatch({
          type: "ADD_EXPENCE", //mandatory
          payload: newExpence,
        });
      };
      const deleteExpence = (id)=>{
          dispatch({
            type:"DELETE_TODO",
            payload:id,
    
          })
      }
        return (
        <GlobalContext.Provider 
        value={
            {
                todo:state.todo,
                addExpence,
                deleteExpence,
            }
        }>
        {children}
        </GlobalContext.Provider>
    );
};
 
