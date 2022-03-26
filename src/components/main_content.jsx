import React, { useContext } from "react";
import Button from "./button";
import ModalContext from "../provider";
const MainContent = () => {
    const { setModal } = useContext(ModalContext);
    return (
        <main className="my-16 flex flex-col justify-center items-center gap-8">
            <h4 className="font-bold">
                Welcome To El Academy's Question Application
            </h4>
            <div className="flex flex-col justify-center gap-4">
                <p>
                    Please select question topics so we could generate them for
                    you
                </p>
                <Button
                    text="select questions"
                    onClick={() => setModal(true)}
                />
            </div>
        </main>
    );
};

export default MainContent;
