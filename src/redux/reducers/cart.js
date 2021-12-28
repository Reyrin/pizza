const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrise = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_PIZZA_CART": {
            const currentPizzaItems = state.items[payload.id]
                ? [...state.items[payload.id].items, payload]
                : [payload];

            const newItems = {
                ...state.items,
                [payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrise(currentPizzaItems),
                    totalCount: currentPizzaItems.length
                },
            };

            const allPizzas = [].concat(...Object.values(newItems).map(obj => obj.items));
            const totalPrice = getTotalPrise(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }

        case "ON_MINUS_CARTITEM": {
            const newPizzas = state.items[payload].items;           

            if ( newPizzas.length > 1 ) newPizzas.pop()

            const newItems = {
                ...state.items,
                [payload]: {
                    items: newPizzas,
                    totalPrice: getTotalPrise(newPizzas),
                    totalCount: newPizzas.length
                },
            };

            const allPizzas = [].concat(...Object.values(newItems).map(obj => obj.items));
            const totalPrice = getTotalPrise(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }

        case "ON_PLUS_CARTITEM": {
            const newPizzas = [].concat(state.items[payload].items);
            newPizzas.push(newPizzas[newPizzas.length - 1]);

            const newItems = {
                ...state.items,
                [payload]: {
                    items: newPizzas,
                    totalPrice: getTotalPrise(newPizzas),
                    totalCount: newPizzas.length
                },
            };

            const allPizzas = [].concat(...Object.values(newItems).map(obj => obj.items));
            const totalPrice = getTotalPrise(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }

        case "ON_REMOVE_CARTITEM": {
            const newItems = {
                ...state.items
            };

            delete newItems[payload];

            const allPizzas = [].concat(...Object.values(newItems).map(obj => obj.items));
            const totalPrice = getTotalPrise(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }

        case "CLEAR_PIZZA_CART":
            return initialState;

        default:
            return state;
    }
};

export default cart;
