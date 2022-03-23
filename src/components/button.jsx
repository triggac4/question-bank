import React from "react";

const Button = ({ text, hover }) => {
    return (
        <button
            className={`border-none ${
                hover ? "hover:bg-blue-400" : "bg-blue-400"
            } ${
                hover ? "hover:text-white" : "text-white"
            } font-semibold p-4 capitalize`}
        >
            {text}
        </button>
    );
};

export default Button;
