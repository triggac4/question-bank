import React from "react";
import Button from "./button";

const Header = () => {
    return (
        <header className="flex px-8 py-2 items-center justify-between">
            <h1 className="text-xl text-center font-bold ">
                El Academy Question Bank
            </h1>
            <div className="flex gap-8">
                <Button text="Add Questions" hover />
                <Button text="Select Question" hover />
            </div>
        </header>
    );
};

export default Header;
