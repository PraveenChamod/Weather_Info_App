import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CityWeatherCard from "../components/CityWeatherCard";
import Logo from "../components/Logo";


const ViewWeather = () => {
  const { CityCode } = useParams();
  const findCityDataById = (cityDataList, CityCode) => {
    return cityDataList.find((city) => city.id === parseInt(CityCode));
  };

  const cityData = useSelector((state) =>
    findCityDataById(state.weather.data.list, CityCode)
  );

  if (!cityData) {
    return (
      <div className="view_weather_container">
        <p>City not found.</p>
      </div>
    );
  }

  return (
    <div className="view_weather_container">
      <div className="view_weather_logo">
        <Logo />
      </div>
      <div className="View_card_container">
        <CityWeatherCard
          cityName={cityData.name}
          countryName={cityData.sys.country}
          status={cityData.weather[0].description}
          statusImg={getCardStatusImageUrl(0)}
          temp={convertKelvinToCelsius(cityData.main.temp)}
          pressure={cityData.main.pressure}
          humidity={cityData.main.humidity}
          visibility={cityData.visibility / 1000}
          sunrise={cityData.sys.sunrise}
          sunset={cityData.sys.sunset}
          windSpeed={cityData.wind.speed}
          windDegree={cityData.wind.deg}
          tempMin={cityData.main.temp_min}
          tempMax={cityData.main.temp_max}
          time={new Date(cityData.dt * 1000).toLocaleTimeString()}
          bgcolor={getCardColor(0)}
        />
      </div>
    </div>
  );
};

const getCardStatusImageUrl = (idx) => {
  switch (idx) {
    case 0:
      return require("./../assets/broken_clouds.png");
    case 1:
      return require("./../assets/clear_sky.png");
    case 2:
      return require("./../assets/few_clouds.png");
    case 3:
      return require("./../assets/light_ran.png");
    case 4:
      return require("./../assets/mist.png");
    case 5:
      return require("./../assets/few_clouds.png");
    case 6:
      return require("./../assets/clear_sky.png");
    case 7:
      return require("./../assets/broken_clouds.png");
    default:
      return null;
  }
};

const getCardColor = (idx) => {
  switch (idx) {
    case 0:
      return "#378de7";
    case 1:
      return "#6149cb";
    case 2:
      return "#40b681";
    case 3:
      return "#de934e";
    case 4:
      return "#9c3939";
    case 5:
      return "#40b681";
    case 6:
      return "#6149cb";
    case 7:
      return "#378de7";
    default:
      return null;
  }
};

const convertKelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

export default ViewWeather;
