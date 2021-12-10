import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Categories,
    SortPopup,
    PizzaCard,
    PizzaLoading,
} from "./../components";
import { setCategory } from "./../redux/actions/filters";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sorts = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
];

function Home() {
    const items = useSelector((state) => state.pizzas.items);
    const isLoading = useSelector((state) => state.pizzas.isLoaded);
    const dispatch = useDispatch();

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickItem={onSelectCategory}
                />
                <SortPopup items={sorts} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? items.map((item) => <PizzaCard key={item.id} {...item} />)
                    : [...Array(12)].map((item, index) => <PizzaLoading key={index} />)
                    
                }
            </div>
        </div>
    );
}

export default Home;
