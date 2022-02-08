export const ActionsType = {
    ADD_TO_CART: "addCart",
    REMOVE_FROM_CART: "removeCart",
};

const addToCart = (id, name, price) => {
    return {
        type: ActionsType.ADD_TO_CART,
        payload: { id, name, price }
    };
};

const removeFromCart = (id) => {
    return {
        type: ActionsType.REMOVE_FROM_CART,
        payload: id
    };
};

export { addToCart, removeFromCart };
