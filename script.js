// Задание 1

function concatStrings(str, separator = '') {
  return function (arg) {
    if (typeof arg !== 'string') {
      return str;
    }

    if (typeof separator !== 'string') {
      separator = '';
    }

    let concatString = str + separator + arg;

    return concatStrings(concatString, separator);
  }
}

// Задание 2 

class Calculator {
  constructor(x, y) {   
    const isValid = typeof x !== 'number' || typeof y !== 'number' || !isFinite(x) || !isFinite(y);

    if (isValid) {
      throw new Error('Ошибка!')      
    } 
    this.x = x;
    this.y = y;
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
