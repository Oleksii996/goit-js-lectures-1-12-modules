const promise = new Promise((resolve, reject) => {
  console.log('create promise');
  setTimeout(() => {
    resolve('promise resolved');
  }, 5000);
});

const intervalId = setInterval(() => {
  console.log(promise);
}, 1000);

// Зупиняємо інтервал після того, як проміс виконається:
promise.then(() => {
  clearInterval(intervalId);
  console.log('interval stopped');
});
