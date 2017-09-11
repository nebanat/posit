export default {
  sayHello() {
    return 'hello';
  },
  addNumbers(value1, value2) {
    const result = value1 + value2;
    if (result < 5) {
      return 'error must be greater than 5';
    } else if (typeof result !== 'number') {
      return 'enter a number';
    }

    return result;
  },
  message() {
    // console.log('message reached');
  }

};

