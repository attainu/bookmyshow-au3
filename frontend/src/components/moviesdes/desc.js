import React,{useState, useEffect} from "react";
import axios from 'axios';
import "./desc.scss"
const Desc=(props)=>{
   const name=props.name;
   const [movie, setMovie] = useState([]);
   useEffect(() => {
     axios.get(`/movies/getMovies/${name}`)
     .then(res => {
       const result = res.data;
       setMovie(result );
     }) },[name]);

return(
    <div className="desc">
        <div className="container py-2">
        <div class="row ">
         <div class="col-4 ">
         <img src={movie.poster}  className="img-fluid border-rounded" alt="..."/>
        </div>
        <div class="col-8">
<h5>{movie.name}</h5>
        <h5>Hindi</h5>
<h5>{movie.category} | {movie.releasedate} | {movie.duration}</h5>
 <br/>
 <ul className="list-unstyled">
<li><p>Actors : {movie.actors}</p></li>
<li><p>Director: {movie.director}l</p></li>
 </ul>
<h6>SYNOPSIS</h6>
<p>{movie.description}</p>
       </div>
           </div>
        </div>
    </div>
)
}
export default Desc