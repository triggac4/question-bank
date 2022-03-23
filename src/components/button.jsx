import React from "react";

const Button = ({ text }) => {
    return (
        <button className="border-none hover:bg-blue-400 hover:text-white font-semibold p-4 capitalize">
            {text}
        </button>
    );
};

export default Button;
