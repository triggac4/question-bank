import React from "react";

const ModalContext = React.createContext({
    modalState: true,
    setModal: (val) => {},
});

export default ModalContext;
