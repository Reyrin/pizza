import React from "react";
import PropTypes from "prop-types";


const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onClickCategory(index)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    onClickCategory: PropTypes.func,
    activeCategory: PropTypes.number,
};

Categories.defaultProps = {
    items: [],
    activeCategory: null,
};
  
export default Categories;
