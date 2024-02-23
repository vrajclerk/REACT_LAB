import { LOGIN,LOGOUT } from "./actionType"

const loginReducer  = (state = [], action) => {
    switch(action.type){
        case LOGIN:
          
               return [...state,action.payload.username];//add username to array
            
        case LOGOUT:
            return state.filter((user) => user !== action.payload.username); //remove username from array if logout is clicked
            

        default:
            return state;
    }
};
export default loginReducer;