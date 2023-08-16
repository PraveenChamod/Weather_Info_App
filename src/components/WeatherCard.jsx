import React from "react";

const Card = ({
  cityName,
  countryName,
  status,
  statusImg,
  temp,
  pressure,
  humidity,
  visibility,
  sunrise,
  sunset,
  windSpeed,
  windDegree,
  tempMin,
  tempMax,
  time,
  onClick,
  backImgUrl,
  bgcolor,
}) => {
  const divStyle = {
    backgroundColor: bgcolor,
  };

  return (
    <div className="weather_card_container" onClick={onClick}>
      <div className="card_top" style={divStyle}>
        <div className="card_top--left">
          <div>
            <p className="city">
              {cityName}, {countryName}
            </p>
            <p className="time">{time}</p>
          </div>
          <div className="weather">
            <div className="imageStatus">
              <img src={statusImg} alt="arrow" style={{ width: "26px" }} />
            </div>
            <p>{status}</p>
          </div>
        </div>
        <div className="card_top--right">
          <p className="temp">{temp}°C</p>
          <div>
            <p className="tempValue">Temp Min: {tempMin}°C</p>
            <p className="tempValue">Temp Max: {tempMax}°C</p>
          </div>
        </div>
      </div>
      <div className="card_bottom">
        <div className="card_bottom--left">
          <div className="group">
            <p className="title">Pressure:</p> &nbsp;
            <p className="value">{pressure}Pa</p>
          </div>
          <div className="group">
            <p className="title">Humidity:</p> &nbsp;
            <p className="value">{humidity}%</p>
          </div>
          <div className="group">
            <p className="title">Visibility:</p> &nbsp;{" "}
            <p className="value">{visibility}Km</p>
          </div>
        </div>
        <div className="card_bottom--center">
          <img
            src={require("../assets/arrow.png")}
            alt="arrow"
            style={{ width: "26px" }}
          />
          <p className="title">
            {windSpeed}m/s {windDegree}°
          </p>
        </div>
        <div className="card_bottom--right">
          <div className="group">
            <p className="title">Sunrise:</p> &nbsp;
            <p className="value">
              {new Date(sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="group">
            <p className="title">Sunset:</p> &nbsp;
            <p className="value">
              {new Date(sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
