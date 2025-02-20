// Complete the function calculateAverage
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 }
];
const pressureThreshold = 1015;

function calculateAverage(pressureThreshold) {
 
  const filteredWeather = weather.filter(city => city.pressure >= pressureThreshold);

  
  const temperatures = filteredWeather.map(city => city.temperature);

  
  const totalTemperature = temperatures.reduce((sum, temperature) => sum + temperature, 0);

 
  const averageTemperature = totalTemperature / temperatures.length;

  
  return averageTemperature.toFixed(1);
}

console.log(calculateAverage(pressureThreshold));
// Output: 68.3
