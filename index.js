const drivers = [];
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }

const result = findMatching(drivers, "");
console.log(result);

function fuzzyMatch (drivers, string) {
const stringLength = string.length;
return drivers.filter(driver => driver.slice(0, stringLength) === string);
}
const match = fuzzyMatch(driver, "");
console.log(match);

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}