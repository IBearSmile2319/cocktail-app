import { types } from '../types';

const initialState = {
    data: [],
    cart: [],
    total: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.addCart:
            localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]))
            localStorage.setItem('total', JSON.stringify(state.total + action.payload.price))
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price
            }
        case types.removeCart:
            localStorage.setItem('cart', JSON.stringify(state.cart.filter(e => e.idDrink !== action.payload.idDrink)))
            localStorage.setItem('total', JSON.stringify(state.total - action.payload.price))
            return {
                ...state,
                cart: state.cart.filter(e => e.idDrink !== action.payload.idDrink),
                total: state.total - action.payload.price
            }
        case types.loadData:
            return {
                ...state,
                data: action.payload.data,
                cart: action.payload.cart,
                total: action.payload.total
            }
        default:
            return state
    }
}