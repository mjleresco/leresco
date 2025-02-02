import Widget from './widget.js';

class WeatherForecast extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-weather-forecast">
          <h2>${data.location}</h2>
          <p>Current Weather: ${data.currentWeather}</p>
          <p>Temperature: ${data.temperature}°C</p>
          <p>Forecast:</p>
          <ul>
            ${data.forecast.map((day) => `
              <li>
                <span>${day.day}</span>
                <span>${day.weather}</span>
                <span>${day.temperature}°C</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `,
      styles: `
        .jsap-widget-weather-forecast {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `,
    });
  }
}

export default WeatherForecast;

/*
import WeatherForecast from './weather-forecast.js';

const weatherForecast = new WeatherForecast({
  id: 'my-weather-forecast',
  data: {
    location: 'New York',
    currentWeather: 'Sunny',
    temperature: 22,
    forecast: [
      {
        day: 'Monday',
        weather: 'Cloudy',
        temperature: 20,
      },
      {
        day: 'Tuesday',
        weather: 'Rainy',
        temperature: 18,
      },
      {
        day: 'Wednesday',
        weather: 'Sunny',
        temperature: 22,
      },
    ],
  },
});

*/