import React from "react";
import { Grid } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Logo />
      <SearchBar />
      <div className="dashboard_card_container">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={6} key={0}>
            <WeatherCard
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
              bgcolor={getCardColor(0)}
              //isCityInfo={false}
              //onClick={() => handleCardClick(List.List[idx].CityCode)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} key={0}>
            <WeatherCard
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
              bgcolor={getCardColor(0)}
              //isCityInfo={false}
              //onClick={() => handleCardClick(List.List[idx].CityCode)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} key={0}>
            <WeatherCard
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
              bgcolor={getCardColor(0)}
              //isCityInfo={false}
              //onClick={() => handleCardClick(List.List[idx].CityCode)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} key={0}>
            <WeatherCard
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
              bgcolor={getCardColor(0)}
              //isCityInfo={false}
              //onClick={() => handleCardClick(List.List[idx].CityCode)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} key={0}>
            <WeatherCard
              cityName="Colombo"
              countryName="LK"
              status="clear sky"
              statusImg={getCardStatusImageUrl(1)}
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
              bgcolor={getCardColor(0)}
              //isCityInfo={false}
              //onClick={() => handleCardClick(List.List[idx].CityCode)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
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

  const getCardStatusImageUrl = (idx) => {
    switch (idx) {
      case 0:
        return require('./../assets/broken_clouds.png');
      case 1:
        return require('./../assets/clear_sky.png');
      case 2:
        return require('./../assets/few_clouds.png');
      case 3:
        return require('./../assets/light_ran.png');
      case 4:
        return require('./../assets/mist.png');
      case 5:
        return require('./../assets/few_clouds.png');
      case 6:
        return require('./../assets/clear_sky.png');
        case 7:
          return require('./../assets/broken_clouds.png');
      default:
        return null;
    }
  };


const convertKelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

export default Dashboard;
