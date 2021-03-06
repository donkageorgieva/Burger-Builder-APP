import * as actionTypes from './actions'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6,

}

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
// eslint-disable-next-line default-case
switch(action.type){
    case actionTypes.ADD_INGREDIENT:
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.payload.ingredientName] : state.ingredients[action.payload.ingredientName] + 1,
            
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
        }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1,
               
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName],
            }
}
return state;
}

export default reducer;