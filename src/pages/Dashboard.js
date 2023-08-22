import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";
import CityList from "./../cities.json";
import { useNavigate } from "react-router-dom";
import {
  useGetWeatherDataQuery,
  useRefreshWeatherDataMutation,
} from "../redux/weatherApi";

const Dashboard = () => {
  // Step 1: Extract City codes from cities.json file and load it into an array.
  const getCityCodes = () => {
    return CityList.List.map((city) => city.CityCode).join(",");
  };
  const cityIds = getCityCodes();

  // Step 2: Get the latest weather information from the servers.
  const { data, isLoading, error } = useGetWeatherDataQuery(cityIds);

  // Step 4: Refetch the data after 5 minutes expiration time
  const [refreshWeatherData] = useRefreshWeatherDataMutation();

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshWeatherData(cityIds);
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [cityIds, refreshWeatherData]);

  const navigate = useNavigate();
  const handleCardClick = (CityCode) => {
    navigate(`/${CityCode}`);
  };

  //Step 3: Display the Components
  return (
    <div className="dashboard_container">
      <Logo />
      <SearchBar />
      {isLoading ? (
        <div className="notification">Data is Loading...</div>
      ) : error ? (
        <div className="notification">Error: {error}</div>
      ) : (
        <div className="dashboard_card_container">
          <Grid spacing={0} container align="center">
            {data?.list?.map((data, idx) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                key={idx}
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 2,
                  paddingBottom: 2,
                }}
              >
                <WeatherCard
                  cityName={CityList.List[idx].CityName}
                  countryName={data.sys.country}
                  statusImg={getCardStatusImageUrl(idx)}
                  status={data.weather[0].description}
                  temp={data.main.temp}
                  pressure={data.main.pressure}
                  humidity={data.main.humidity}
                  visibility={data.visibility / 1000}
                  sunrise={formatSunTimestamp(data.sys.sunrise)}
                  sunset={formatSunTimestamp(data.sys.sunset)}
                  windSpeed={data.wind.speed}
                  windDegree={data.wind.deg}
                  tempMin={data.main.temp_min}
                  tempMax={data.main.temp_max}
                  time={formatTimestamp(data.dt)}
                  bgcolor={getCardColor(idx)}
                  onClick={() => handleCardClick(CityList.List[idx].CityCode)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
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

export default Dashboard;
