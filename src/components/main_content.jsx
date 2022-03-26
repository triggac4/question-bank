import React, { useContext } from "react";
import Button from "./button";
import ModalContext from "../provider";
const MainContent = () => {
    const { setModal } = useContext(ModalContext);
    return (
        <main className="my-auto h-4/5 flex flex-col justify-center items-center gap-8">
            <h4 className="font-bold">
                Welcome To El Academy's Question Application
            </h4>
            <div>
                <Button
                    text="select questions"
                    onClick={() => setModal(true)}
                />
            </div>
        </main>
    );
};

export default MainContent;
