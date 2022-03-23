import React from "react";

const Header = () => {
    return (
        <header className="flex px-8 py-2 items-center justify-between">
            <h1 className="text-xl text-center font-bold ">
                El Academy Question Bank
            </h1>
            <div className="flex gap-8">
                <button className="border-none hover:bg-blue-400 hover:text-white font-semibold p-4">
                    Add Question
                </button>
                <button className="border-none hover:bg-blue-400 hover:text-white font-semibold p-4">
                    Select Question
                </button>
            </div>
        </header>
    );
};

export default Header;
