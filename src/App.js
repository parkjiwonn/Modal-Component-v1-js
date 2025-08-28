import "./App.css";
import Modal from "./components/common/Modal/Modal";
import ModalTestPage from "./components/pages/ModalTestPage/ModalTestPage";
import { ModalProvider } from "./hook/useModalManager";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        {/* 모달 테스트 페이지 */}
        <ModalTestPage />

        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;