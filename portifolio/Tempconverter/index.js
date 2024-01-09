//creates a function
function convertTemperature() {
  // Takes input from html elements with selected IDS, 
// and assign it to variables.
  var temperature = Number(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");
  var outputUnit = document.getElementById("outputUnit");
  var bathMessage = document.getElementById("bathMessage");
  var bathImage = document.getElementById("bathImage");

  // if statements that creates different outputs depending on temperature input
  // and prints result to innerHTML
  if (unit === "celsius") {
    if (temperature >= 45) {
      bathMessage.innerHTML = "It's way too hot!";
      bathImage.src = "too-hot.jpg";
    } else if (temperature >= 15) {
      bathMessage.innerHTML = "It's time for a bath!";
      bathImage.src = "bath-time.jpg";
    } else if (temperature < -273) {
      bathMessage.innerHTML = "temperature is absolute zero bruh!";
      bathImage.src = "absolute-zero.gif";
    } else {
      bathMessage.innerHTML = "It's too cold for a bath!";
      bathImage.src = "too-cold.jpg";
    }
    result.innerHTML = Math.trunc((temperature * 9/5) + 32);
    outputUnit.innerHTML = 'Fahrenheit';

  } else {
    if (temperature >= 113) {
      bathMessage.innerHTML = "It's way too hot!";
      bathImage.src = "too-hot.jpg";
    } else if (temperature >= 49) {
      bathMessage.innerHTML = "It's time for a bath!";
      bathImage.src = "bath-time.jpg";
    } else if (temperature <= -460) {
      bathMessage.innerHTML = "temperature is absolute zero bruh!";
      bathImage.src = "absolute-zero.gif";
    } else {
      bathMessage.innerHTML = "It's too cold for a bath!";
      bathImage.src = "too-cold.jpg";
    }
    result.innerHTML = Math.trunc((temperature - 32) * 5/9);
    outputUnit.innerHTML = 'Celsius', 'fahrenheit';
  }
  // Show the image after it has been loaded
  bathImage.onload = function() {
    bathImage.style.display = "block";
  };
}