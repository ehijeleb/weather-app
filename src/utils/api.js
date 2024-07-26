// src/utils/api.js

export const fetchWeather = async (location) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    console.log('Fetched Data:', data); // Debugging line
    return data; // Returning the entire weather data
  } catch (error) {
    console.error('Fetch weather failed:', error);
    alert(`Error fetching weather data: ${error.message}`);
    return null;
  }
};
