export default (state, action) => {
    switch (action.type) {
      case "ADD_EXPENCE":
        return {
          ...state,
          todo: [...state.todo, action.payload],
        };
        case "DELETE_TODO":
          return{
            ...state,
            todo:[...state.todo].filter((item)=>item.id.trim()!=action.payload.trim())
          }
      default:
        return state;
    }
  };
  