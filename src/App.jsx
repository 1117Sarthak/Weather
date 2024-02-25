import React, { useEffect, useState } from "react";
import html from "./html";
import "./style.css";

const App = () => {
  // const [data, setdata] = useState("null");
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const date = new Date();
  const d = date.getDay();
  const currDate = new Date().toLocaleDateString();
  const currtime = new Date().toLocaleTimeString();
  // console.log("hello");
  let day = "";
  switch (d) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
  }
  // if(d==6){
  //   day="Saturday";
  // }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=64b47017be36d55ee001c95d9f175ba4`;
      // const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=64b47017be36d55ee001c95d9f175ba4`
      // https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=b14425a6554d189a2d7dc18a8e7d7263
      // const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`
      const response = await fetch(url);
      // console.log("hello");
      // console.log(response);
      // const temp=undefined;

      const resJson = await response.json();
      // const wind = await response.json();

      setCity(resJson.main);
      // setdata(resJson.weather);

      // console.log(city);
      // console.log(resJson);
      // console.log(data);
      // console.log(data[0].main);
    };
    fetchApi();
  });

  // console.log(data.country);

  return (
    <>
      <div className="container">
        <div className="col1">
          <h1 className="location">{search}</h1>
          {/* <h3> {data}</h3> */}

          {!city ? (
            <p></p>
          ) : (
            <>
              <p className="temperature">{city.temp}  ℃</p>
            </>
          )}
          <div className="time">
            <p className="curr-time"> {currtime} </p>
            <p className="day-date">
              {day} {currDate}
            </p>
          </div>
        </div>
        <div className="col2">
          <div className="searchbar">
          <i class='fas fa-cloud-moon-rain'></i>
            <h1 className="haze">Haze</h1>
            <div className="search">
              <input
                type="search"
                placeholder="Search any city"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            {!city ? (
              <p>No Data Found</p>
            ) : (
              <>
                <div className="info">
                  <h3 className="text-center">{search}</h3>
                  <h2 className="border">Temperature : {city.temp} ℃el</h2>
                  <h3 className="border">
                    Min:{city.temp} | Max:{city.temp} ℃el
                  </h3>
                  {/* <h3>Wind Speed : {city.wind.speed} Km/h</h3> */}

                  {/* <h3> {data}</h3> */}
                  <h3 className="border">Humidity : {city.humidity}%</h3>
                  {/* {data[0].main} */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
