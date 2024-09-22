// Creating a obj
let user = new Object();
user.name = "John";
user.surname = "smith";
user.name = "Pete";
delete user.name;

console.log(user)

// Check for emptiness
function isEmpty(obj) {
    for (const _ in obj) {
      return false
    }
    return true
}

// Sum object
let sum = 0
for (const key in salaries) {
    sum += salaries[key];
}

// Multiply numerics by 2
function multiplyNumeric(obj) {
    
    for (const key in obj) {
      if (typeof(obj[key]) === 'number') {
        obj[key] *= 2;
      }
    }
  
  }

  // Use "this" in object literal
  // Gives a error because "this" as a property is undefined

  // Calculator
  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };

  // Code that allows for chainable methods
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  // two functions one object
  let dummy = {}

  function A() {
    return dummy;
  }

  function B() {
    return dummy;
  }

  let a = new A();
  let b = new B();
  console.log(`a = b? ${a === b}`)

  // New Calculator
  function Calculator() {
    this.sum = function() {
      return this.a + this.b;
    },
  
    this.mul = function() {
      return this.a * this.b;
    },
  
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  }

  // New accumulator
  function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("add?", 0)
    }
  }