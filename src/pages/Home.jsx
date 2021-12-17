import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Categories,
    SortPopup,
    PizzaCard,
    PizzaLoading,
} from "./../components";

import { getPizzas } from './../redux/action';
import { setCategory, setSortBy } from "./../redux/actions/filters";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Сладкие",
];

const sorts = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
  ];

function Home() {
    const dispatch = useDispatch();
    const { category, sortBy } =  useSelector(({filters}) => filters);
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoading = useSelector(({pizzas}) => pizzas.isLoaded);

    React.useEffect(() => {
        dispatch(getPizzas(category, sortBy));
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                    activeCategory={category}
                />
                <SortPopup items={sorts} onClickItem={onSelectSortBy} activeItem={sortBy.type} />
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
