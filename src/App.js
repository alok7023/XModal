import { useState } from "react";
import "./App.css";
import Modal from "react-modal";
import ModalForm from "./ModalForm";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <div className="modal-content">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <ModalForm closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
