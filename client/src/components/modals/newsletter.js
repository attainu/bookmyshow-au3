import "./modal.scss"
import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
const Newsmodal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h6 onClick={toggle}>Subscribe to newsletter</h6>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody> 
            <div className="resend">
            <h6 >Subscribe to newsletter</h6>
            <h5>Never miss an update from us!</h5>
            <p>Subscribe to our free newsletters to be<br/> the first one to know about all things <br/>entertainment.</p>
            <input className="resendinput" type="email" placeholder="email"/>
            <Button color="primary">Resend</Button>
            </div>
         </ModalBody>
      </Modal>
    </div>
  );
}

export default Newsmodal;