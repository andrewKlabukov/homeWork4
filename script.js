
// Задание 2 

class Calculator {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue,
    this.secondValue = secondValue
  }

  // setX(num){
  //   num = 
  // }
  // setY(num){

  // }
  logSum() {
    console.log(this.firstValue + this.secondValue)
  }
  logMul() {
    console.log(this.firstValue * this.secondValue)
  }
  logSub() {
    console.log(this.firstValue - this.secondValue)
  }
  logDiv() {
    console.log(this.firstValue / this.secondValue)
  }

}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
// calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
// calculator.setY(444n); // Ошибка!
