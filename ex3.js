function weatherClothingAdviser(temperature, isRaining) {
    if (isRaining) {
        return "Wear a raincoat and carry an umbrella.";
    } else if (temperature <= 0) {
        return "Wear a heavy coat, gloves, and a hat.";
    } else if (temperature <= 20) {
        return "Wear a jacket or sweater.";
    } else {
        return "Wear light clothing, it's warm.";
    }
}

console.log(weatherClothingAdviser(15, false));
console.log(weatherClothingAdviser(10, true));
console.log(weatherClothingAdviser(25, false));
