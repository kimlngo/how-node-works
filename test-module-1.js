class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}
//exporting Calculator as a Class
module.exports = Calculator;

//exporting Calculator as an Object (Singleton)
module.exports = new Calculator();
