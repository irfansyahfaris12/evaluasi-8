import { GET_DATA } from "../type/index";

const initialState = {
    items:[],
    data:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA:
        return{...state, data: action.payload.data};
      default:
        return state;
    }
  };