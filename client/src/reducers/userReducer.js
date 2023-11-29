import {SET_USER_DATA,SET_AUTH_TOKEN } from "../actions/actionTypes";


const initailState={
    userData:null,
    authToken:null

};
const userReducer=(state=initailState,action)=>{
   console.log('reducer fun',action)
    switch (action.type) {
        case SET_USER_DATA:
          return {
            ...state,
            userData: action.payload,
          };
        case SET_AUTH_TOKEN:
          return {
            ...state,
            authToken: action.payload,
          };
        default:
          return state;
      }
}
export default userReducer;
