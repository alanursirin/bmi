let weight = Number(prompt("Enter your weight"));

let height = Number(prompt("Enter your height in meters"));

let result = weight / (height * 2);

if (result < 18.5) {
    alert("Below the ideal weight: " + result);
} else if (result >= 18.5 && result <= 24.9) {
    alert("Within the ideal weight range: " + result);
} else if (result >= 25 && result <= 29.9) {
   alert("Overweight: " + result);
} else if (result >= 30 && result <= 39.9) {
    alert("Well above the ideal weight (obese): " + result);
} else if (result >= 40) {
    alert("Well above the ideal weight (morbidly obese): " + result);
}

