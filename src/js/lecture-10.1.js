/* // Приклад з інтервалом
{
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
} */

/* // Приклад з обробкою результату промісу
{
  const promiseExample = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 5000) + 2000;
    console.log(`Random number is ${randomNumber} ms`);
    setTimeout(resolve, randomNumber);
  });
  console.log(promiseExample);

  function onResolved() {
    console.log('Nice');
    console.log('Promise resolved');
  }
  function onRejected() {
    console.log('Promise rejected');
  }

  promiseExample.then(onResolved, onRejected);
  // або так:
  promiseExample.then(onResolved).catch(onRejected);

  // зручно для inline функцій:
  promiseExample
    .then(() => {
      console.log('Проміс готовий');
    })
    .catch(() => {
      console.log('Проміс помилка');
    });
} */

// Приклад з випадковим успіхом/помилкою
{
  const promiseExample = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 5000) + 2000;
    console.log(randomNumber);

    setTimeout(() => {
      if (randomNumber % 2 === 0) resolve('Смачного!');
      else reject('Поки не готово!');
    }, randomNumber);
  });

  promiseExample
    .then(x => {
      console.log(x);
      console.log('Danke schön');
    })
    .catch(y => {
      console.log(y);
      console.log('Ich bin nicht zufrieden');
    });
}
