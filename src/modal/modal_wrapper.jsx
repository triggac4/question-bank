import React from "react";
import ReactPortal from "./react_portal";
const ModalWrapper = ({ children }) => {
    return (
        <ReactPortal>
            <div className="fixed inset-0 bg-modalWrapper flex flex-col items-center justify-center">
                <div className="inset-0 bg-white z-20 flex flex-col items-center justify-center">
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
