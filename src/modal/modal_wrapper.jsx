import React, { useContext } from "react";

import ModalContext from "../provider";
import ReactPortal from "./react_portal";
const ModalWrapper = ({ children }) => {
    const { setModal } = useContext(ModalContext);

    return (
        <ReactPortal>
            <div
                className="fixed inset-0 flex flex-col items-center justify-center bg-modalWrapper"
                onClick={() => setModal(false)}
            >
                <div
                    className="inset-0 bg-gray-100 z-20 flex flex-col items-center justify-center py-2 px-4 shadow-md"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end w-full mb-4">
                        <button
                            className="w-8 bg-transparent text-blue-400 hover:text-red-500 text-lg font-bold"
                            onClick={() => setModal(false)}
                        >
                            &#10005;
                        </button>
                    </div>
                    <div className="relative">{children}</div>
                </div>
            </div>
        </ReactPortal>
    );
};

export default ModalWrapper;
