
const axios = require('axios'); // Corrected typo in 'axios'
const city = 'Nairobi';

async function getWeather() {
const url = `https://wttr.in/${city}?format=%c=%t`; // Fixed URL
try {
const response = await axios.get(url); // Corrected 'axios'
console.log(`Today's weather in ${city}: ${response.data}`);
} catch (error) {
console.log('Could not fetch weather data:', error.message); // Fixed error handling
}
}

getWeather();