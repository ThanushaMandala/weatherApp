const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value;
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.data[0].temp;
      const description = data.data[0].weather.description;
      weatherDiv.innerHTML = `Temperature: ${temp}°C<br>Description: ${description}`;
    })
    .catch(error => {
      console.error(error);
      weatherDiv.innerHTML = 'An error occurred while fetching weather data.';
    });
});