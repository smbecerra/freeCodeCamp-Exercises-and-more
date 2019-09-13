function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit
  }
  get temperature(){
    return 5 / 9 * (this.farenheit - 32);
  }
  set temperature(celsius){
    this.farenheit = celsius * 9.0 / 5 + 32;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C




function makeClass() {
  "use strict";
class Thermostat{
  constructor(celsius){
    this.celsius = celsius
  }
  get temperature(){
    return this.celsius * 9.0 / 5 + 32;
  }
  set temperature(fahrenheit){
     return 5 / 9 * (this.farenheit - 32);
  }
}
  return Thermostat;
}
