import React from "react";

const Select = ({ name, label, options }) => {
    return (
        <label className="flex w-full justify-start">
            <div className="w-40 capitalize font-semibold">{label}</div>
            <select
                name={name}
                className="min-w-max text-white bg-blue-400 p-2 rounded-md focus:outline-none"
            >
                {options.map((e, i) => (
                    <option value={e} key={i}>
                        {e}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
