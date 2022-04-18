
import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
    foods: []
}


const FoodReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'actionTypes.ADD_FOOD':
            return {
                ...state, 
                foods: payload}
            };
    
        default:
            return state;
    }
};

export default FoodReducer;
