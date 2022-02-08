import { ActionsType } from "../actions/Actions";

const initialState = {
    products: [
        { id: 1, name: "TV", price: 500 },
        { id: 2, name: "FRIZE", price: 700 },
        { id: 3, name: "MOBILE", price: 900 },
        { id: 4, name: "LAPTOP", price: 7600 },
        { id: 5, name: "MACHINE", price: 5900 },
    ],
    carts: [],
};

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionsType.ADD_TO_CART: {
            const { id, name, price } = payload

            let carts = [...state.carts]
            let index = carts.findIndex(item => item.id === id)
            let item = carts[index]

            if (!item) {
                carts.push({ id, name, price, size: 1 })
            } else {
                item.size++
            }

            return { ...state, carts };
        }

        case ActionsType.REMOVE_FROM_CART: {
            const newCart = state.carts.filter((pd) => pd.id !== payload);
            return {
                ...state,
                carts: [...newCart],
            };
        }

        default:
            return state;
    }
};
