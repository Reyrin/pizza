import React from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    console.log("RERENDER");

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        className={activeItem === index ? "active" : ""}
                        onClick={() => onSelectItem(index)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;
