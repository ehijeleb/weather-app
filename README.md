# Weather Clothing Recommendation App

A web application that uses the OpenWeatherMap API to determine the current weather in a given location and provides clothing recommendations based on the weather conditions.

## Features

- Fetches current weather data from the OpenWeatherMap API.
- Displays weather information including temperature, weather description, and location.
- Provides outfit recommendations based on temperature, weather conditions, and wind speed.
- Uses images to visually represent recommended clothing items.


## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ehijeleb/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies:**

    ```npm install
    ```

3. **Create a .env file in the root directory and add your OpenWeatherMap API key:**

    ```REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

4. **Start the development server**

    ```npm start
    ```

5. **Open your browser and navigate to:**

    http://localhost:3000

## Usage

1. Enter a location in the input field (e.g., "London")
2. Click "Get Weather" to fetch and display the weather information
3. View the clothing recommendations based on the current weather conditions

## Project Structure

weather-app/
├── public/
│   ├── images/
│   │   ├── clear.png
│   │   ├── clouds.png
│   │   ├── rain.png
│   │   ├── thunderstorm.png
│   │   ├── drizzle.png
│   │   ├── snow.png
│   │   ├── mist.png
│   │   ├── hot.png
│   │   ├── warm.png
│   │   ├── cool.png
│   │   ├── cold.png
│   │   ├── tshirt.png
│   │   ├── shorts.png
│   │   ├── trousers.png
│   │   ├── hoodie.png
│   │   ├── jacket.png
│   │   ├── umbrella.png
│   │   ├── windbreaker.png
│   ├── outfitRecommendations.json
│   ├── weatherIcons.json
├── src/
│   ├── components/
│   │   ├── WeatherInput.jsx
│   │   ├── WeatherDisplay.jsx
│   ├── utils/
│   │   ├── api.js
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md

## Technologies used

- React
- Tailwind CSS
- OpenWeatherMap API

## License

- This project is licensed under the MIT License. 