import "../style.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
function TenDayForeCast() {
  const [indexWeatherBox, setIndexWeatherBox] = useState();
  const getAllWeathers = useSelector((state) => state.entities.weather);
  if (getAllWeathers.loading == false) {
    var weathers = [];
    let i,
      chunk = 4;
    for (i = 0; i < getAllWeathers.list.list.length; i += chunk) {
 
      weathers.push({DailyWeather :getAllWeathers.list.list.slice(i, i + chunk),Date:getAllWeathers.list.list[i].dt_txt});
      // do whatever
    }
    console.log(weathers);
  }
  const handler = function (e) {
    setIndexWeatherBox(e.target.getAttribute("data-index"));
    console.log(e.target.getAttribute("data-index")); //will log the index of the clicked item
  };
  //
  if (getAllWeathers.loading) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <div className="test">
          <div className="city-container">city-container</div>
          <div className="icon-container">icon-container</div>
        </div>
        <div className="main-container">
          <div className="current-forecast-container">
            current-forecast-container
          </div>
        </div>
        <div id="nested-inner-container">
          {weathers.map((weather, index) => (
           
            <section key={index} data-index={index} onClick={handler}>
               <div className="cardDescription">{weather.Date}</div>
              content
            </section>
          ))}
        </div>

      </>
    );
  }
}
export default TenDayForeCast;
