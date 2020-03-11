import "./modal.scss"
import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
const Resendmodal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h6 onClick={toggle}>Resend Booking Confirmation</h6>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody> 
            <div className="resend">
            <h6 >Resend Confirmation</h6>
            <h5>Lost Your Confirmation details?</h5>
            <p>No worries, we've got you covered! Simply<br/> enter the info you used while booking & we'll send it to you in a jiffy!</p>
            <input className="resendinput" type="email" placeholder="email"/>
            <Button color="primary">Resend</Button>
            </div>
         </ModalBody>
      </Modal>
    </div>
  );
}

export default Resendmodal;