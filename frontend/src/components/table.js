import React, { Fragment } from "react";
const Table=()=>{
    return(
        <Fragment>
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

        </Fragment>
    )
}
export default Table