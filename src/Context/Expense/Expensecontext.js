import React,{createContext, useReducer} from 'react'
import ExpenseReducer from "./ExpenseReducer"
const initialState={
    todo:[],
    Editdata:{},
    filterdata:"",
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
      const editData = (data) =>{
        dispatch({
          type:"EDIT_DATA",
          payload:data,
        })
      }
      const filterData = (data) =>{
        dispatch({
          type:"FILTER_DATA",
          payload:data
        })
      }
        return (
        <GlobalContext.Provider 
        value={
            {
                todo:state.todo,
                Editdata:state.Editdata,
                filterdata:state.filterdata,
                editData,
                addExpence,
                deleteExpence,
                filterData,
            }
        }>
        {children}
        </GlobalContext.Provider>
    );
};
 
