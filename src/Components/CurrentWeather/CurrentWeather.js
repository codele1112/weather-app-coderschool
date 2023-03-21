import "./CurrentWeather.css";
function CurrentWeather({ data }) {
  console.log("data:", data);
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.name}</p>
        <p className="weather-description">{data.weather[0].description}</p>
      </div>

      {/* <img alt="weather" className="weather-icon" src="" /> */}
      <div div className="bottom">
        <p className="temperature">{Math.floor(data.main.temp - 273.15)} °C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.floor(data.main.feels_like - 273.15)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">80%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">100hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
