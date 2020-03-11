import React,{useState, useEffect  } from "react";
import Moviecard from "./moviecard";
import axios from 'axios';
const NowShowing=()=>{
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("/movies")
    .then(res => {
      const result = res.data;
      setMovies(result );
    }) },[]);
    return(
        <div>
          <div className="row row-cols-1 row-cols-md-4">
            { Movies.map((item)=>
              <Moviecard movie={item}/>)
            }
</div>
        </div>
    )
}
export default NowShowing