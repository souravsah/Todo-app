export default (state, action) => {
    switch (action.type) {
      case "ADD_EXPENCE":
        return {
          ...state,
          todo: action.payload.Edit==false?[...state.todo, action.payload]:[...state.todo].map((item)=>{
            if(item.id===action.payload.id){
              action.payload.Edit=false
              return action.payload
            }else{
              return item
            }
          })
        };

        case "DELETE_TODO":
          return{
            ...state,
            todo:[...state.todo].filter((item)=>item.id.trim()!=action.payload.trim())
          }
          case "EDIT_DATA":
            return{
              ...state,
              Editdata:action.payload
            }
          case "FILTER_DATA":
            return{
              ...state,
              filterdata:action.payload
            } 
      default:
        return state;
    }
  };
  