import React from "react";

const ModalContext = React.createContext({
    modalState: false,
    setModal: (val) => {},
});

export default ModalContext;
