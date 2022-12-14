import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Carousel() {


  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=EC6icD48M9E5M53GHq9nL85FYR3XKqRFQ_WR_aAKRoM"
      )
      .then((response) => {
        setdata(response.data);
        // console.log(response)
      });
  }, []);
   


  return (
    <div>
      <div className="main-wrapper">
        {data.map((value) => {
        return(
          <>
            <img src={value.urls.regular}  alt="imgs" />
            
          </>)
        })}
      </div>
    </div>
  );
}
