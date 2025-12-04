//Промисифікація синхронних функцій
// Promise.resolve()
// Promise.reject()

/* //Варіанти промисифікації
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
 */

/* //Промисифікована функція
{
  function createPromise(value, isPositive, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isPositive) resolve(value);
        else reject(value);
      }, delay);
    });

    return promise; //Функції, яка повертає проміс
  }
  //Функції, яка використовує промисифіковану функцію
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
} */

//Масив промісів
{
  function createPromise(value, isPositive, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isPositive) resolve(value);
        else reject(value);
      }, delay);
    });

    return promise; //Функції, яка повертає проміс
  }

  const p1 = createPromise('Promise1', true, 5000);
  const p2 = createPromise('Promise2', true, 2000);
  const p3 = createPromise('Promise3', true, 1000);
  const p4 = createPromise('Promise4', true, 3000);
  const p5 = createPromise('Promise5', true, 4000);

  const arrPromises = [p1, p2, p3, p4, p5];
  console.log(arrPromises);

  Promise.all(arrPromises) //Повертає масив значень виконаних промісів (true !!!)
    .then(values => console.log(values))
    .catch(error => console.log(error));

  Promise.race(arrPromises) //Повертає перший виконаний проміс (true or false)
    .then(values => console.log(values))
    .catch(error => console.log(error));

  Promise.allSettled(arrPromises) //Повертає масив значень виконаних промісів (true or false)
    .then(values => console.log(values))
    .catch(error => console.log(error));
}
