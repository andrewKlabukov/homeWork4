// Задание 1

function concatStrings(str, separator) {
  if (typeof str !== 'string') {
    return;
  }
  
  return function(args) {
    if(typeof args !== 'string') {
      return str;
    }
    
    let res = str + args;

    if (typeof separator === 'string' && args !== '') {
      res = str + separator + args; 
    }

    return concatStrings(res, separator);
  }
}

// Задание 2 

class Calculator {
  constructor(x, y) {   
    const isValid = typeof x !== 'number' || typeof y !== 'number' || !isFinite(x) || !isFinite(y);

    if (isValid) {
      throw new Error('Ошибка! Не поддерживаемые значения!')      
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
    if (typeof num !== 'number' || !isFinite(num)) {
      throw new Error('Ошибка! Не поддерживаемое значение!')
    }
    
    this.x = num;       
  }

  setY(num){
    const isValid = typeof num !== 'number' || !isFinite(unm) || num === 0;
    if (isValid) {
      throw new Error('Ошибка!  Не поддерживаемое значение!')
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
      throw new Error('Ошибка! На ноль делить нельзя!')
    }
    console.log(this.x / this.y);
  }
}

