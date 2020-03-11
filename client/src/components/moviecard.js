import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { store } from '../store/store';
const Moviecard=(props)=>{
  const globalState = useContext(store);
  const { dispatch } = globalState;
    const movie=props.movie;
    return(
        <div className="col-sm-3 mb-3">
        <div className="card clearfix  h-100">
        <Link  key={movie.id} to={`./theatre/${movie.name}`}> <img src={movie.poster} className="card-img-top" alt="..." onClick={()=>dispatch({ type: 'updateMovieName',payload:movie.name })}/></Link>
         <div className="card-body text-center">
    <p className="card-title ">{movie.name}</p>
          <Link to={`./theatre/${movie.name}`} className="btn btn-primary btn-block ">Book Ticket</Link>
         </div>
       </div>
       </div>
     
    )
}
export default Moviecard