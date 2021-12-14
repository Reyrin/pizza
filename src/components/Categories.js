import React from "react";

const Categories = React.memo(function Categories({ items, onClickItem, activeCategory }) {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => onClickItem(null)}
                >
                    Все
                </li>
                {items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onClickItem(index)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;
