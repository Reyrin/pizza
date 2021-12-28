export const addPizzaToCart = (pizzaObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj,
});

export const onMinus = (id) => ({
    type: "ON_MINUS_CARTITEM",
    payload: id,
});

export const onPlus = (id) => ({
    type: "ON_PLUS_CARTITEM",
    payload: id,
});

export const onRemove = (id) => ({
    type: "ON_REMOVE_CARTITEM",
    payload: id,
});

export const clearCart = () => ({
    type: "CLEAR_PIZZA_CART"
});