import React, { Fragment } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login'; 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Login=()=>{
    const responseFacebook = (response) => {
        console.log(response);
      }
      const responseGoogle = (response) => {
        console.log(response);
      }
    
    return(
        <Fragment>
            <Header/>
        <div className="container my-5 ">
            <div className="row">
            <div class="col-md-6 offset-md-3 border rounded ">
        <h4 className="text-center">Login In</h4>
        <div className="container"> 
            <div class="row">
                <div class="col">
                <FacebookLogin
                    appId="538034627071024" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="fbBtn"
                />
                </div>
                <div class="col">
                <GoogleLogin
                    clientId="" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    className="gbtn"
                />  
                 </div>
            </div>
            <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <input type="email" class="form-control" id="email" placeholder="Email" required/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Send Otp</button>
                </form>
                <hr/>
                <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <input type="number" class="form-control" id="otp" placeholder="Enter Otp" required/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Sign/Login</button>
                </form>
             </div>
             </div>
            </div>
        </div>
        <Footer/>
        </Fragment>
    )
}
export default Login