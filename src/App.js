import React, { useState } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './utils/api';
import './index.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleFetchWeather = async (location) => {
    const data = await fetchWeather(location);
    if (data) {
      setWeatherData(data);
      setLocation(location); // Set the location
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>

    <div class="bg-card text-card-foreground p-6 rounded-lg shadow-lg w-full max-w-md">
    <label for="location" class="block text-sm font-medium">Enter your location:</label>
    <WeatherInput onFetchWeather={handleFetchWeather} />
    </div>

      <WeatherDisplay weatherData={weatherData} location={location}/>
    </div>
  );
};

export default App;
