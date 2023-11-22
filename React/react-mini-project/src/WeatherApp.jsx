import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bijnor",
    humidity: 40,
    temp: 18.79,
    tempMax: 18.79,
    tempMin: 18.79,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </>
  );
}
