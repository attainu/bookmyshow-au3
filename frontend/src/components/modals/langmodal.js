
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Delhi from "./cityicon/Delhi.png"
import Banglore from "./cityicon/Bangalore.png"
import Hyderabd from "./cityicon/Hyderabad.png"
import Mumbai from "./cityicon/Mumbai.png"
const Langmodal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
 const [city,setCity]= useState("Delhi")
  const toggle = () => setModal(!modal);

  const changeCity=(c)=>{
      setCity(c);
      setModal(false);
  }
  return (
    <div>
      <Button className="langbtn" color="danger" onClick={toggle}>{city}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
<h6 className="citytitle"> Popular cities</h6>  
    <ul className="cities">
    <li onClick={()=>changeCity("Delhi")} ><img src={Delhi}/><p>Delhi</p></li>
    <li onClick={()=>changeCity("Mumbai")}><img src={Mumbai}/><p>Mumbai</p></li>
    <li onClick={()=>changeCity("Banglore")}><img src={Banglore}/><p>Bangalore</p></li>
    <li onClick={()=>changeCity("Hyderabad")}><img src={Hyderabd}/><p>Hyderabad</p></li>
    </ul> 
         </ModalBody>
      </Modal>
    </div>
  );
}

export default Langmodal;