// One
const object = {
  message: 'Hello World!',
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 0); // undefined

// Two
setTimeout(() => console.log('1'), 0);
Promise.resolve().then(() => console.log('2'));
console.log('3'); // 3 2 1
