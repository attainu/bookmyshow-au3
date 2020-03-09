import React,{useContext} from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import { store } from '../../store/store';
import Sidebar from "../../components/seatsidebar";
const SeatMap=()=> {
  const {state,dispatch}= useContext(store);
 // const [clicked, setclicked] = useState(false);
   const createButton=(item)=>{
        let button=[];
        for (let index = 0; index<11; index++) {
            button.push(<button  key={index} className= "btn btn-light border mx-2" onClick={()=>dispatch({ type: 'updateSeat',payload:state.seat})} >{index+1}</button>)
         }
        return button;
    }
        return(
            <div>
                <Header/>
                <div className="container my-3">
                  <div className="row ">
                    <div className="col-sm-10 border-right"> 
                    <div className="container">
                    <h3 className="text-center mt-2"> Choose your seat</h3>
                 <div className="row mb-3">
                  <div className="col-sm-2">
                    <h2>A</h2>
                   </div>
                  <div className="col-sm-10">
                    {createButton()}
                   </div>
                 </div>
                 <div className="row mb-3">
                  <div className="col-sm-2">
                    <h2>B</h2>
                   </div>
                  <div className="col-sm-10">
                    {createButton()}
                   </div>
                 </div>
                 <div className="row mb-3">
                  <div className="col-sm-2">
                    <h2>C</h2>
                   </div>
                  <div className="col-sm-10">
                    {createButton()}
                   </div>
                 </div>

            <div className="text-center mt-4 border  mb-5 border-danger rounded bg-light">
            <h1>Screen This Side</h1> 
            </div>
              </div>
               </div>
                    <div className="col-sm-2">
                  <Sidebar/>
                    </div>
                  </div>
                </div>
              <Footer/>
            </div>
        )
    }


export default SeatMap;