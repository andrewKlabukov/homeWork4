// Задание 1

function concatStrings(string, separator = '') {
  return function (arg) {
    if (typeof arg !== 'string') {
      return string;
    }

    if (typeof separator !== 'string') {
      separator = '';
    }

    let concatenatedString = string + separator + arg;

    return concatStrings(concatenatedString, separator);
  }
}

console.log(concatStrings('first', null)('second')())

// Задание 2 

class Calculator {
  constructor(x, y) {   
    const isValid = typeof x !== 'number' || typeof y !== 'number' || !isFinite(x) || !isFinite(y);

    if (isValid) {
      throw new Error('Ошибка!')      
    } 
    this.x = x,
    this.y = y
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logDiv = this.logDiv.bind(this);  
  } 

  setX(num){
    if (typeof num !== 'number') {
      throw new Error('Ошибка!')
    }
    
    this.x = num;       
  }

  setY(num){
    if (typeof num !== 'number') {
      throw new Error('Ошибка!')
    }
    
    this.y = num;  
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('Ошибка!')
    }
    console.log(this.x / this.y);
  }

}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
// calculator.setY(444n); // Ошибка!
