// Creating a obj
let user = new Object();
user.name = "John";
user.surname = "smith";
user.name = "Pete";
delete user.name;

console.log(user)

// Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
      return false
    }
    return true
}

// Sum object
let sum = 0
for (const key in salaries) {
    sum += salaries[key];
}