import React, { Fragment,useContext,useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { store } from '../../store/store';
import axios from 'axios';

const Ticket=()=>{
    const {state} = useContext(store);
    const [data,setdata]=useState({email:"",mobile:""});
    const result={
      email:data.email,
      name:state.theatre,
      location:state.location,
      tickets:state.seat,
      movie:state.movie
    }
  //console.log(state)

   const handleSubmit = (e) => {
 
     console.log(result);
     axios.post( '/theatres/bookticket',result,{
      headers: {'Content-Type': 'application/json' }
     })
      .then(response=> {
          //handle success
          console.log(response);
          alert("you can view ur email at:",<a href={response.data}/>);
          window.location = "/"
      })
      .catch(response=>{
          //handle error
          console.log(response);
      });
    }
  
   const handleChange = (e) =>{
      setdata({...data,[e.target.name]:e.target.value});
      console.log(data)
    }
    return(
    <Fragment>
        <Header/>
    <div className="container ">
        <div className="row my-3">
        <div className="col-md-6 offset-md-3 ">
        <h6> Booking Details</h6>
         <h5>{state.movie}</h5>
         <table className="table table-striped">
 
 <tbody>
   <tr>
     <th scope="row">Date</th>
     <td colSpan ="3">{state.date}</td>
   </tr>
   <tr>
     <th scope="row">Theatre</th>
     <td colSpan="3">{state.theatre}</td>
   </tr>
   <tr>
     <th scope="row">Timing</th>
     <td colSpan="3">09:00 am</td>
   </tr>
   <tr>
     <th scope="row">Seats selected</th>
      <td colSpan="3">{state.seat}</td>
   </tr>
 </tbody>
</table>
          <hr/>
          <h5>Contact Details</h5>
          <hr/> 
        <div className="form-inline"  >
          <div className="form-group mx-sm-3 mb-2">
            <input type="email" className="form-control" onChange={(e)=>handleChange(e)} id="email" name="email" placeholder="Email" required/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input type="number" className="form-control" onChange={(e)=>handleChange(e)} id="mobile" name="mobile" placeholder="Mobile" required/>
          </div>
          <button type="button"  onClick={()=>handleSubmit()} className="btn btn-primary  btn-block mb-2">Confirm Booking</button>
        </div>
            </div>
       </div>
    </div>
    <Footer/>
    </Fragment>
)
}
export default Ticket