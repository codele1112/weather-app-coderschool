import React, { useState, useEffect } from "react";
import "./Search.css";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
const api = {
  key: "c547838551446c6a1947bd7c93e303ef",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("sydney");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchCity) return;
      try {
        const url = `${api.base}weather?q=${searchCity}&unit=metric&APPID=${api.key}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setWeatherInfo(data);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (err) {
        setErrorMessage(err.message);
      }
      setLoading(false);
    };
    fetchWeatherData();
  }, [searchCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
  };
  return (
    <div className="input-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </form>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {errorMessage ? (
              <div style={{ color: "red" }}>{errorMessage}</div>
            ) : (
              <CurrentWeather data={weatherInfo} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
