import React, { useContext } from "react";

import ModalContext from "../provider";
import ReactPortal from "./react_portal";
const ModalWrapper = ({ children }) => {
    const { setModal } = useContext(ModalContext);

    return (
        <ReactPortal>
            <div
                className="fixed inset-0 flex flex-col items-center justify-center"
                onClick={() => setModal(false)}
            >
                <div
                    className="inset-0 bg-slate-400 z-20 flex flex-col items-center justify-center py-4 px-8 shadow-md"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end w-full">
                        <button
                            className="w-8 bg-transparent text-white hover:text-red-500 text-lg font-bold"
                            onClick={() => setModal(false)}
                        >
                            X
                        </button>
                    </div>
                    <div
                        className="relative"
                        style={{ width: "50vw", minHeight: "200px" }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </ReactPortal>
    );
};

export default ModalWrapper;
