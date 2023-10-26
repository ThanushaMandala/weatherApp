const form = document.querySelector('form');
const input = document.querySelector('input');
const iconDiv = document.querySelector('#icon');
const detailsDiv = document.querySelector('#details');

// Add event listener to search form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value;
  const apiKey = 'f235c5e839c641aa861661c219ae7237';
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

  // Fetch weather data for selected location
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.data[0].temp;
      const description = data.data[0].weather.description;
      let iconCode = data.data[0].weather.icon;
      // remove the first character from the icon code
      // to get the correct icon name
      iconCode = iconCode.substring(1);

      // Display weather data and icon
      iconDiv.innerHTML = `<i class="fas fa-${getIcon(iconCode)}"></i>`;
      detailsDiv.innerHTML = `Temperature: ${temp}°C<br>Description: ${description}`;
    })
    .catch(error => {
      console.error(error);
      detailsDiv.innerHTML = 'An error occurred while fetching weather data.';
    });
});

// Get icon code based on weather condition
function getIcon(iconCode) {
  switch (iconCode) {
    case '01d':
      return 'sun';
    case '01n':
      return 'moon';
    case '02d':
    case '02n':
    case '03d':
    case '03n':
      return 'cloud';
    case '04d':
    case '04n':
      return 'cloud-meatball';
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return 'cloud-showers-heavy';
    case '11d':
    case '11n':
      return 'bolt';
    case '13d':
    case '13n':
      return 'snowflake';
    case '50d':
    case '50n':
      return 'smog';
    default:
      return 'question';
  }
}