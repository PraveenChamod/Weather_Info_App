import React from "react";
import CityWeatherCard from "../components/CityWeatherCard";
import Logo from "../components/Logo";

const ViewWeather = () => {
  return (
    <div className="view_weather_container">
      <div className="view_weather_logo">
        <Logo />
      </div>
      <div className="View_card_container">
        <CityWeatherCard
          cityName="Colombo"
          countryName="LK"
          status="clear sky"
          statusImg={getCardStatusImageUrl(0)}
          temp={convertKelvinToCelsius(-10.5)}
          pressure="1028"
          humidity="66"
          visibility="10000"
          sunrise="1485753940"
          sunset="1485784855"
          windSpeed="5"
          windDegree="200"
          tempMin="-11"
          tempMax="10"
          time={new Date().toLocaleTimeString()}
          bgcolor="green"
          //isCityInfo={false}
          //onClick={() => handleCardClick(List.List[idx].CityCode)}
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

const convertKelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

export default ViewWeather;
