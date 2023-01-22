import axios from "axios"

export const getAllFoods = ()=>async dispatch=>{

    dispatch({type : "GET_FOODS_REQUEST"})

    try{
        const response = await axios.get("https://payment-server-996t.onrender.com/api/foods/getfoods")
        console.log(response)
        dispatch({type : "GET_FOODS_SUCCESS" , payload : response.data})
    }
    catch(error){
        dispatch({type : "GET_FOODS_FAILED" , payload : error})
    }
}