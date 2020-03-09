import React ,{useState, useEffect}from "react";
import axios from 'axios';
import "./theatre.scss"
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import Desc from "../../components/moviesdes/desc";
import Theatrecard from "../../components/theatrecard";

const Theatre=(props)=>{
  const name =props.match.params.name;
    const [Theatre, setTheatre] = useState([]);
    useEffect(() => {
      axios.get("/theatres")
      .then(res => {
        const result = res.data;
        setTheatre(result );
      })},[]);
  
    return(
        <div>
            <Header/>
            <Desc name={name}/>
        <div class="container  border mt-5">
            <div className="container ">
                {Theatre.map((item)=>
                <Theatrecard Theatre={item}/>
                )}
</div>
</div>
<br/>
<Footer/>
</div>

    )
}
export default Theatre