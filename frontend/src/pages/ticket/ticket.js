import React, { Fragment,useContext,useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import { store } from '../../store/store';

const Ticket=()=>{
    const {state} = useContext(store);
    handleSubmit = event => {
      event.preventDefault();
      const user = {
        name: this.state.name
      }
      axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then(res=>{
          console.log(res);
          console.log(res.data);
          window.location = "/" //This line of code will redirect you once the submission is succeed
        })
    }
    return(
    <Fragment>
        <Header/>
    <div className="container ">
        <div class="row my-3">
        <div class="col-md-6 offset-md-3 ">
        <h6> Booking Details</h6>
<h5>{state.movie}</h5>
        <table class="table table-striped">
 
  <tbody>
    <tr>
      <th scope="row">Date</th>
<td colspan="3">{state.date}</td>
    </tr>
    <tr>
      <th scope="row">Theatre</th>
      <td colspan="3">{state.theatre}</td>
    </tr>
    <tr>
      <th scope="row">Timing</th>
      <td colspan="3">09:00 am</td>
    </tr>
    <tr>
      <th scope="row">Seats selected</th>
<td colspan="3">{state.seat}</td>
    </tr>
  </tbody>
</table>
<hr/>
<h5>Contact Details</h5>
<hr/>
<form className="form-inline" onSubmit = {handleSubmit()} >
  <div className="form-group mx-sm-3 mb-2">
    <input type="email" class="form-control" id="inputPassword2" name="email" placeholder="Email" required/>
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <input type="number" class="form-control" id="inputPassword2" name="mobile" placeholder="Mobile" required/>
  </div>
  <button type="submit" class="btn btn-primary  btn-block mb-2">Confirm Booking</button>
</form>
            </div>
       </div>
    </div>
    <Footer/>
    </Fragment>
)
}
export default Ticket