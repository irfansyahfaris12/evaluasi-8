import { GET_DATA} from "../type";

export const getData = data => {
    return{
        type:GET_DATA,
        payload:{ data }
    };
};