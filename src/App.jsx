import Header from "./components/header";
import MainContent from "./components/main_content";
import ModalWrapper from "./modal/modal_wrapper";
import Form from "./components/select_questions";
function App() {
    return (
        <>
            <ModalWrapper>
                <Form />
            </ModalWrapper>
            <Header />
            <MainContent />
        </>
    );
}

export default App;
