const form = document.querySelector("form");
const input = document.querySelector("input");
const iconDiv = document.querySelector("#icon");
const detailsDiv = document.querySelector("#details");
const loadingSpinner = document.querySelector("#loadingSpinner");
const weatherTitle = document.querySelector("#weatherTitle");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value;
    const apiKey = "f235c5e839c641aa861661c219ae7237";
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    loadingSpinner.style.display = 'block';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.data[0].temp;
            const description = data.data[0].weather.description;
            const humidity = data.data[0].rh;
            const pressure = data.data[0].pres;

            let iconCode = data.data[0].weather.icon;
            iconCode = iconCode.substring(1);

            loadingSpinner.style.display = 'none';

            iconDiv.innerHTML = `<i class="fas fa-${getIcon(iconCode)}"></i>`;
            detailsDiv.innerHTML = `
                <table>
                    <tr>
                        <td><i class="fas fa-thermometer-half"></i></td>
                        <td>Temperature: ${temp}°C</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-info-circle"></i></td>
                        <td>Description: ${description}</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-tint"></i></td>
                        <td>Humidity: ${humidity}</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-tachometer-alt"></i></td>
                        <td>Pressure: ${pressure}mbar</td>
                    </tr>
                </table>
            `;
            weatherTitle.textContent = `Current Weather Conditions in ${city}`;
        })
        .catch((error) => {
            console.error(error);
            detailsDiv.innerHTML = "An error occurred while fetching weather data.";
            loadingSpinner.style.display = 'none';
        });
});

function getIcon(iconCode) {
    switch (iconCode) {
        case "01d":
            return "sun";
        case "01n":
            return "moon";
        case "02d":
        case "02n":
        case "03d":
        case "03n":
            return "cloud";
        case "04d":
        case "04n":
            return "cloud-meatball";
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return "cloud-showers-heavy";
        case "11d":
        case "11n":
            return "bolt";
        case "13d":
        case "13n":
            return "snowflake";
        case "50d":
        case "50n":
            return "smog";
        default:
            return "question";
    }
}
