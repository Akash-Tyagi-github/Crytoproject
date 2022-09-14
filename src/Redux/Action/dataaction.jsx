import{ ActionTypes} from "../constants/actiontype"

export const setData=(data)=>{
return{
    type: ActionTypes.SET_DATA,
    payload:data
}
};