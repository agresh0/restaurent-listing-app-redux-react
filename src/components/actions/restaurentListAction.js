import axios from "axios";
import { R_FAIL, R_SUCCESS } from "../../constants/restaurentConstants";
// define logic for updating states for a perticular component
export const RestaurentsList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/restaurent.json')
        console.log(data);
        dispatch({
            type: R_SUCCESS,
            payload: data.restaurants
        })
    } catch (error) {
        dispatch({
            type: R_FAIL,
            error: error
        })
    }
    }