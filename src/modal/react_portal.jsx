import { createPortal } from "react-dom";

const ReactPortal = ({ children }) => {
    return createPortal(children, document.getElementById("modal-root"));
};
