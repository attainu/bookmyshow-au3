import React,{useContext} from "react";
import { store } from '../store/store';
import { Link } from "react-router-dom";

const Sidebar=()=>{
    const {state}= useContext(store);
return(
    <div>
        <h5 className="font-weight-bold">{state.movie}</h5>
        <hr/>
        <p className="text-info">Theatre</p>
        <h6>{state.theatre}</h6>
        <p className="text-info">Showtime</p>
         <h6>{state.date}|09:00 am</h6>
        <hr/>
        <p>Seat Selected :{state.seat}</p>
        <br/>
        <div className="d-flex">
        <Link to="/ticket" type="button" className="btn btn-primary">Continue</Link>
        <Link to="/" type="button" className="btn btn-primary ml-2">Cancel</Link>
        </div>

    </div>
)
}
export default Sidebar