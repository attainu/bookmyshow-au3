import React, { Fragment ,useContext} from "react";
import { Link } from "react-router-dom";
import { store } from '../store/store';

const Theatrecard=(props)=>{
    const globalState = useContext(store);
    const { dispatch } = globalState;  
    const theatre= props.Theatre;
    const data={
        theatre:theatre.name,
    }
return(
    <Fragment>
    <div class="row border-bottom pb-2">
<div class="col-sm pt-3">
<h5 >{theatre.name}</h5>
</div>
<div class="col-sm pt-3">
<Link  to="/seatmap"  className="btn border text-success ml-2" onClick={()=>dispatch({ type: 'updateTheatreName',payload:data })}>09:00am</Link>
<Link to="/seatmap" className="btn border text-success  ml-2" onClick={()=>dispatch({ type: 'updateTheatreName',payload:data })}>10:00am</Link>
<Link  to="/seatmap"  className="btn border text-success  ml-2" onClick={()=>dispatch({ type: 'updateTheatreName',payload:data })}>11:00am</Link>
</div>
</div>
<br/>
</Fragment>
)
}
export default Theatrecard;