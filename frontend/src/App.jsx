import React, { useState } from "react";

import ModalContext from "./provider";

import Header from "./components/header";
import MainContent from "./components/main_content";
import ModalWrapper from "./modal/modal_wrapper";
import Form from "./components/select_questions";
function App() {
    const [isOpen, setModal] = useState(false);
    return (
        <ModalContext.Provider value={{ modalState: isOpen, setModal }}>
            {isOpen && (
                <ModalWrapper>
                    <Form />
                </ModalWrapper>
            )}
            <Header />
            <MainContent />
        </ModalContext.Provider>
    );
}

export default App;
