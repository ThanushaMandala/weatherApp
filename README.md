# weatherApp
a simple weather app which gives temperature and describes the weather for a city name entered
<img width="637" alt="Screenshot 2023-10-26 at 10 29 08 PM" src="https://github.com/ThanushaMandala/weatherApp/assets/67900374/aaf47ecc-5eb9-4cea-b588-b6473a52a799">

Example response when a city is entered.
<img width="1728" alt="Screenshot 2023-10-26 at 11 02 44 PM" src="https://github.com/ThanushaMandala/weatherApp/assets/67900374/1e6789bd-3a0e-4a73-b6e0-17e67f4db66b">

How to Run the weatherApp:
Set Up:
Ensure you have a modern web browser installed (like Google Chrome, Firefox, Safari, etc.) and a code editor if you want to view or modify the source code.

Clone or Download the Repository:
If the app is hosted on a platform like GitHub, provide steps to clone or download the source code.

Open the Application:
Navigate to the directory containing the weatherApp's files. Double click on the index.html (or the entry HTML file) to open the application in your default web browser.

Usage:

Once the application loads, you should see an input field.
Enter the name of the city for which you want to check the weather.
Click on the submit button (or press Enter).
The app will then fetch and display the weather details for the specified city.
API Details:
Endpoint: https://api.weatherbit.io/v2.0/current

Method: GET
Parameters:
   city: Name of the city.
   key: Your API key. For this app, the API key used is f235c5e839c641aa861661c219ae7237.

Response:

The API returns current weather data for the specified city, including details like temperature, humidity, weather description, and more.

General information:

Endpoint & Base URL: The API will have a base URL, and you'll typically append the city name or other parameters to this URL to get weather data.

Data Format: Most weather APIs provide data in JSON format. This includes details such as temperature, humidity, wind speed, forecast, etc.

Rate Limits: Many free-tier APIs have a limit on the number of requests you can make in a given timeframe, e.g., 60 requests per minute.

Coverage: Depending on the API, you may have access to weather data for cities worldwide or might be limited to specific regions.

Additional Features: Some APIs provide advanced features like historical weather data, forecasts for several days in advance, or even radar imagery.


Note: It's essential not to expose API keys in client-side code for production applications. This is just a simple example, and in a real-world scenario, you'd hide your API key server-side or use some proxy mechanism.