//Промисифікація синхронних функцій
// Promise.resolve()
// Promise.reject()

//Варіанти промисифікації
{
  //Повернення промісу
  {
    function foo(x, y) {
      const sum = x + yF;

      const myValue = new Promise(res => {
        res(sum);
      });

      return myValue;
    }
  }
  //Повернення промісу
  {
    function foo(x, y) {
      const sum = x + y;
      return Promise.resolve(sum);
    }
  }
}

//Промисифікована функція
function createPromise(value, isPositive, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPositive) resolve(value);
      else reject(value);
    }, delay);
  });

  return promise;
}

const p1 = createPromise('Promise1', true, 5000);
const p2 = createPromise('Promise2', false, 2000);
const p3 = createPromise('Promise3', true, 1000);
const p4 = createPromise('Promise4', false, 3000);
const p5 = createPromise('Promise5', true, 4000);

function onFulfilled(result) {
  console.log('fine', result);
}
function onRejected(result) {
  console.log('sad', result);
}

p1.then(onFulfilled, onRejected);
p2.then(onFulfilled, onRejected);
p3.then(onFulfilled, onRejected);
p4.then(onFulfilled, onRejected);
p5.then(onFulfilled, onRejected);
