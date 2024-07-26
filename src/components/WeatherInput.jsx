import React, { useState } from 'react';

const WeatherInput = ({ onFetchWeather }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onFetchWeather(location.trim());
    } else {
      alert('Please enter a valid location');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="w-full mt-1 p-2 rounded-md border border-input focus:outline-none focus:ring focus:ring-ring"/>
      <button type="submit" className="mt-4 bg-black text-white p-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-ring">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherInput;
