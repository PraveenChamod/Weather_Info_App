import React from "react";
import { useParams } from "react-router";
import CityWeatherCard from "../components/CityWeatherCard";
import Logo from "../components/Logo";
import { useGetWeatherDataQuery } from "../redux/weatherApi";
import CityList from "./../cities.json";

const ViewWeather = () => {
  const { CityCode } = useParams();

  const getCityCodes = () => {
    return CityList.List.map((city) => city.CityCode).join(",");
  };
  const cityIds = getCityCodes();
  const {
    data: cityData,
    isFetching,
    isSuccess,
  } = useGetWeatherDataQuery(cityIds);

  let singleCityData = null;
  if (cityData) {
    for (let i = 0; i <= cityData.cnt; i++) {
      if (cityData.list[i].id == CityCode) {
        singleCityData = cityData.list[i];
        break;
      }
    }
  }

  if (isFetching) {
    return (
      <div className="view_weather_container notification">
        <p>City informations Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    return (
      <div className="view_weather_container">
        <div className="view_weather_logo">
          <Logo />
        </div>
        <div className="View_card_container">
          <CityWeatherCard
            cityName={singleCityData.name}
            countryName={singleCityData.sys.country}
            status={singleCityData.weather[0].description}
            statusImg={getCardStatusImageUrl(0)}
            temp={singleCityData.main.temp}
            pressure={singleCityData.main.pressure}
            humidity={singleCityData.main.humidity}
            visibility={singleCityData.visibility / 1000}
            sunrise={formatSunTimestamp(singleCityData.sys.sunrise)}
            sunset={formatSunTimestamp(singleCityData.sys.sunset)}
            windSpeed={singleCityData.wind.speed}
            windDegree={singleCityData.wind.deg}
            tempMin={singleCityData.main.temp_min}
            tempMax={singleCityData.main.temp_max}
            time={formatTimestamp(singleCityData.dt)}
            bgcolor={getCardColor(0)}
          />
        </div>
      </div>
    );
  }
};

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = date.getHours() >= 12 ? "pm" : "am";
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return `${hours}.${minutes}${period}, ${formattedDate}`;
}

function formatSunTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = date.getHours() >= 12 ? "pm" : "am";
  return `${hours}.${minutes}${period}`;
}

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

export default ViewWeather;
