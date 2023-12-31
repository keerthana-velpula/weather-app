import React from "react";
import axios from "axios";
// import TempConverter from "./components/Converter";
function App() {
  const [data, setData] = React.useState([]);
  const [location, setLocation] = React.useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b6c5020bed1ff4a418479af2e4096e4c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="wrapper">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : ""}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : ""}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like} °F</p> : ""}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : ""}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPN</p> : ""}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;