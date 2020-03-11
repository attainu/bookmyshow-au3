import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login'; 
import "./modal.scss"
const SignInModal = (props) => {
  const {
    className  } = props;

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [signupStatus,setsignup]= useState(true)
  const toggle = (modal) => {
    if(modal===modal1) setModal1(!modal)
  else setModal2(!modal)};
 const changestatus =()=>{
   setsignup(!signupStatus)
 }
  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
  const optmodal=()=>{
    setModal1(!modal1)
    setModal2(!modal2);
  }
return (
    <div>
      <Button className="langbtn" color="danger" onClick={()=>toggle(modal1)}>Sign In</Button>
      <Modal isOpen={modal1} toggle={()=>toggle(modal1)} className={className}>
        <ModalBody>
        <div className="container login">
        <h4>Login In</h4>
            <FacebookLogin
        appId="538034627071024" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="fbBtn"
      />
            <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="gbtn"
      />
<div className="status"> {signupStatus?<p>Don't have an account?<span  onClick={changestatus}>Sign Up</span> </p>:<p>Already have account?<span onClick={changestatus}>Login</span> </p>}
</div>
            <div className="login d-flex flex-column">
            <input type="email" class="emailinput"  placeholder="continue with email"/><br/>
         <button className="btn btn-primary d-block " onClick={optmodal}>Continue</button>
            </div>
        </div>
         </ModalBody>
      </Modal>
      <Modal isOpen={modal2} toggle={()=>toggle(modal2)} className={className}>
        <ModalBody>
        <div className="container login">
        <h4>Enter Otp to verify</h4>
            <input type="number" class="emailinput"  placeholder="enter Otp"/><br/>
         <button className="btn btn-primary d-block ">Continue</button>
            </div>
         </ModalBody>
      </Modal>

    </div>
  );
}

export default SignInModal 