// reducers/postReducer.js
const initialState = {

    currentUser:JSON.parse(localStorage.getItem('user'))||null,
    searchedUser:null,
    posts: [],
    
    isFetch: false,
    error: "error should be here",
  };
  
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CURRENT_USER":
            return{...state,currentUser:action.payload};

        case "SEARCHED_USER":
            return{
...state,
searchedUser:action.payload

            };
            case "UPDATE_CURRENT_USER":
                return{
                    ...state,
                    currentUser:action.payload
                }
      case "FETCH_POSTS_REQUEST":
        return {
          ...state,
          isFetch: true,
          error: null,
        };
      case "FETCH_POSTS_SUCCESS":
        return {
          ...state,
          isFetch: false,
          posts: action.payload,
        };
      case "FETCH_POSTS_FAIL":
        return {
          ...state,
          isFetch: false,
          error: action.payload,
        };
        case"LOGOUT":
        return{
...state,currentUser:null
        }
      default:
        return state;
    }
  };
  