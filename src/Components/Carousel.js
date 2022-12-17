import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Carousel.css"
export default function Carousel() {


  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=EC6icD48M9E5M53GHq9nL85FYR3XKqRFQ_WR_aAKRoM"
      )
      .then((response) => {
        setData(response.data);
        console.log(response)
      });
  }, []);
   


  return (
    <div>
      <div className="main-wrapper">

      <div id="content-slider">
          <div className="slider-wrap"> 
        
          
                    
            <input type="radio" id="input-1" name="i" />         
            <input type="radio" id="input-2" name="i" />         
            <input type="radio" id="input-3" name="i" />
            <input type="radio" id="input-4" name="i" />
        
            <nav className="slider-dot-control">
              <label htmlFor="input-1" className="slider-dot"></label>
              <label htmlFor="input-2" className="slider-dot"></label>
              <label htmlFor="input-3" className="slider-dot"></label>
              <label htmlFor="input-4" className="slider-dot"></label>
            </nav>
        
              
    <nav className="slider-arrow-control">
              <label htmlFor="input-1"></label>
              <label htmlFor="input-2"></label>
              <label htmlFor="input-3"></label>
              <label htmlFor="input-4"></label>
            </nav>
          
            {/* <label id="thumb-1" htmlFor="input-1" className="slider-thumb">
              <img src={value.urls.full} alt="" id="p-1"/>
              <div className="slider-head">
                <h2>{value.user.first_name}</h2>
                
              </div>
            </label> */}
        
          
        <div className="slider">
              <div className="slider-inner">
              <figure>
        {data.map((value) => {
       {
             return(
      
         <>
        
                
                  {/* <figcaption className="slider-head">
                    <h2>{value.user.first_name}</h2>
                    
                  </figcaption> */}
                  <img src={value.urls.full} alt="img"  name="slider-img" />
                
                  </>
        
                             
                             
        )
        }
          }
       )}
       </figure>
       </div>
            </div> 
       </div>        
        </div>
      </div>
    </div>
  );
}
