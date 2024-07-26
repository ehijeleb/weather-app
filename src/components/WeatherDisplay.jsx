import React, { useEffect, useState } from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const [outfits, setOutfits] = useState([]);
  const [outfitImages, setOutfitImages] = useState({});
  const [weatherIcons, setWeatherIcons] = useState({});

  useEffect(() => {
    // Fetch outfit recommendations JSON
    fetch('/outfitRecommendations.json')
      .then((response) => response.json())
      .then((data) => setOutfitImages(data));

    // Fetch weather icons JSON
    fetch('/weatherIcons.json')
      .then((response) => response.json())
      .then((data) => setWeatherIcons(data));
  }, []);



  useEffect(() => {
    if (weatherData && Object.keys(outfitImages).length > 0) {
      const { temp } = weatherData.main;
      const { speed: windSpeed } = weatherData.wind;
      const { main: weatherMain, description: weatherDescription } = weatherData.weather[0];
      const { sunrise, sunset } = weatherData.sys;

      const currentOutfits = [];

      if (temp > 25) {
        currentOutfits.push(outfitImages.tshirt, outfitImages.shorts);
      } else if (temp > 15) {
        currentOutfits.push(outfitImages.trousers, outfitImages.tshirt);
      } else if (temp > 5) {
        currentOutfits.push(outfitImages.trousers,outfitImages.hoodie); 
      } else {
        currentOutfits.push(outfitImages.trousers,outfitImages.jacket);
      }

      if (weatherMain.includes('Rain') || weatherDescription.includes('rain')) {
        currentOutfits.push(outfitImages.umbrella);
      }

      if (weatherDescription.includes('snow')) {
        currentOutfits.push(outfitImages.jacket, outfitImages.gloves, outfitImages.hat);
      }


      if (windSpeed > 10) {
        currentOutfits.push(outfitImages.windbreaker);
      }

      const currentHour = new Date().getHours();
      const sunriseHour = new Date(sunrise * 1000).getHours();
      const sunsetHour = new Date(sunset * 1000).getHours();



      setOutfits(currentOutfits);
    }
  }, [weatherData, outfitImages]);

  if (!weatherData) return <p></p>;

  const { temp } = weatherData.main;
  const { main: weatherMain, description: weatherDescription } = weatherData.weather[0];
  const { name: cityName, sys: { country } } = weatherData;

    // Determine weather icon
    let weatherIcon = "";
    if (weatherMain === "Clear") {
      weatherIcon = weatherIcons.weather.clear;
    } else if (weatherMain === "Clouds") {
      weatherIcon = weatherIcons.weather.clouds;
    } else if (weatherMain === "Rain") {
      weatherIcon = weatherIcons.weather.rain;
    } else if (weatherMain === "Thunderstorm") {
      weatherIcon = weatherIcons.weather.thunderstorm;
    } else if (weatherMain === "Drizzle") {
      weatherIcon = weatherIcons.weather.drizzle;
    } else if (weatherMain === "Snow") {
      weatherIcon = weatherIcons.weather.snow;
    } else if (["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"].includes(weatherMain)) {
      weatherIcon = weatherIcons.weather.mist;
    }
  
    // Determine temperature icon
    let tempIcon = "";
    if (temp > 25) {
      tempIcon = weatherIcons.temperature.hot;
    } else if (temp > 15) {
      tempIcon = weatherIcons.temperature.warm;
    } else if (temp > 5) {
      tempIcon = weatherIcons.temperature.cool;
    } else {
      tempIcon = weatherIcons.temperature.cold;
    }

  return (
    <div className="mt-4">
      <div id="weather-info" className="mt-8 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold"></h2>
          <p className="text-xl font-bold">{cityName}, {country}</p>
          <span className="text-sm">Today</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg">{weatherDescription}</p>
          <img aria-hidden="true" alt="weather" src={weatherIcon} className="w-12 h-12"/>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg">{temp}°C</p>
          <img aria-hidden="true" alt="temperature" src={tempIcon} className="w-12 h-12"/>
        </div>
      </div>

      <div id="outfit-recommendation" className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Outfit Recommendation</h2>
        <div className="grid grid-cols-2 gap-4">
          
            {outfits.map((outfit, index) => (
              <img key={index} src={outfit} alt="outfit recommendation" className="w-24 h-24 m-2 bg-card text-card-foreground p-4 rounded-lg shadow-md"/>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default WeatherDisplay;
