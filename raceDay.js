let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let age = 19;

if (age >= 18 && isRegisteredEarly) {
  raceNumber += 1000;
}

if (age >= 18 && isRegisteredEarly) {
  console.log(`Your race will begin at 9.30 AM and your race number is: ${raceNumber}.`);
} else if (age > 18 && !isRegisteredEarly) {
  console.log(`Your race will begin at 11 AM and your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Your race will begin at 12.30 PM and your race number is: ${raceNumber}.`);
} else {
  console.log('Go see the registration desk!')
}