import readline from 'readline';
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

function fahrenheitToKelvin(f) {
  return (f - 32) * 5 / 9 + 273.15;
}

function celsiusToKelvin(c) {
  return c + 273.15;
}

function  celsiusToFahrenheit(c){
  return (c * (9/5)) + 32;
}
function kelvinToCelcius(k){
  return k - 273.15;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askforUnit = (unit) =>{
  return new Promise((resolve) => rl.question(unit, resolve));
}

const main = async() =>{
  const enteredUnit = await askforUnit('What unit do you want to convert? Enter F for Fahrenheit, C for Celsius or K for Kelvin.')
if (enteredUnit === 'F' || enteredUnit === 'f'){
 const unitNum = parseFloat(await askforUnit('Enter the temperature in Fahrenheit:'));
 function isNumberAndDecimal(unitNum) {
  // Check if the value is a number
  if (typeof unitNum === 'number' && !isNaN(unitNum)) {
    let celciusConversion = fahrenheitToCelsius(unitNum);
    let kelvinConversion = fahrenheitToKelvin(unitNum);
   return console.log('The conversion values are as follow: \nCelcius = ' + celciusConversion.toFixed(2) + '\nKelvin = ' + kelvinConversion.toFixed(2));
  }
  else{
   return console.log('Improper value please enter a valid number next time. A valid number is a number not written in text (ex. 1, 33, 78.65)');
  }
}

isNumberAndDecimal(unitNum);
}
else if (enteredUnit === 'C' || enteredUnit === 'c'){
  const unitNum = parseFloat(await askforUnit('Enter the temperature in Celcius:'));
  function isNumberAndDecimal(unitNum) {
   // Check if the value is a number
   if (typeof unitNum === 'number' && !isNaN(unitNum)) {
     let fahrenheitConversion = celsiusToFahrenheit(unitNum);
     let kelvinConversion = celsiusToKelvin(unitNum);
    return console.log('The conversion values are as follow: \nFahrenheit = ' + fahrenheitConversion.toFixed(2) + '\nKelvin = ' + kelvinConversion.toFixed(2));
   }
   else{
    return console.log('Improper value please enter a valid number next time. A valid number is a number not written in text (ex. 1, 33, 78.65)');
   }
 }
 
 isNumberAndDecimal(unitNum);
  
}
else if (enteredUnit === 'K' || enteredUnit === 'k'){
  const unitNum = parseFloat(await askforUnit('Enter the temperature in Kelvin:'));
  function isNumberAndDecimal(unitNum) {
   // Check if the value is a number
   if (typeof unitNum === 'number' && !isNaN(unitNum)) {
     let celsiusKelvinConversion = kelvinToCelcius(unitNum);
    return console.log('The conversion value is as follow: \nCelcius = ' + celsiusKelvinConversion.toFixed(2));
   }
   else{
    return console.log('Improper value please enter a valid number next time. A valid number is a number not written in text (ex. 1, 33, 78.65)');
   }
 }
 
 isNumberAndDecimal(unitNum);
  
}
else{
  console.log('The value unit you entered was invalid. Please enter the correct value next time.')
}
rl.close();
};

main();