import axios from "axios";
import { setPizzas } from "./actions/pizzas";

export const getPizzas = (category, sortBy) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'SET_LOADED', payload: false,});

            const response = await axios.get(`http://localhost:3001/pizzas?${category === null ? '' : `category_like=${category}`}&_sort=${sortBy.type}&_order=${sortBy.order}`);

            dispatch(setPizzas(response.data));
        } catch (error) {
            alert("Произошла ошибка. Попробуйте перезагрузить приложение!");
        }
    };
};
