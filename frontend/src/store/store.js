import React, {createContext, useReducer} from 'react';
const d= new Date();
const tdate=d.toLocaleDateString();
let initialState={
    location:"Delhi",
    movie:"",
    theatre:"",
   // timing:"",
    seat:0,
    date:tdate
}
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("clicked");

    switch (action.type){
        case "updatePlace":
            return {
                ...state,ticket:action.payload 
            }
            case "updateMovieName":
                return {
                    ...state,movie:action.payload
                }
                case "updateTheatreName":
                    return {
                        ...state,theatre:action.payload.theatre
                    }
            /*   case "updateTiming":
                        return {
                            ...state,ticket:{...state.ticket,theatre:{...state.ticket.theatre,timing:action.payload}}
                        } */
              case "updateSeat":
                      return   {
                          ...state,seat:action.payload+1
                      }
            default:
                return state;
    }
    }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }