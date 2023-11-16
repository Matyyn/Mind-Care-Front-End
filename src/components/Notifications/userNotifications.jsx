import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from '@chakra-ui/react';

const TextModal = ({ show, handleClose }) => {
  const text = useSelector((state) => state.notificationsReducer.notifications);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Text Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {text.firstName}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={()=>{handleOpenModal, console.log('jeo')}}>Open Modal</button>
      <TextModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default App;
