import React, { useContext } from "react";
import Button from "./button";
import ModalContext from "../provider";
const Header = () => {
    const { setModal } = useContext(ModalContext);
    return (
        <header className="flex px-8 py-2 items-center justify-between">
            <h1 className="text-xl text-center font-bold ">
                El Academy Question Bank
            </h1>
            <div className="flex gap-8">
                <Button
                    text="Select Question"
                    hover
                    onClick={() => setModal(true)}
                />
            </div>
        </header>
    );
};

export default Header;
