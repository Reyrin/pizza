import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ onClick, className, outline, children, ...props }) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={classNames("button", className, {
                "button--outline": outline,
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
