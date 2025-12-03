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
    })
    .finally(() => {
      console.log('Дякую, що дочитали до кінця!');
    }); // finally виконається в будь-якому випадку
}

// Ланцюжки промісів
{
  const promise = new Promise((resolve, reject) => {
    console.log('Проміс стартував...');
    setTimeout(() => {
      resolve(); // успішно завершуємо через 1 секунду
    }, 1000);
  });

  // Ланцюжок промісів
  promise
    .then(() => {
      console.log('Перший .then — повертаємо 10');
      return 10;
    })
    .catch(() => {
      console.log('Це НЕ виконається, бо проміс успішний');
      return 20;
    })
    .then(res => {
      console.log('Другий .then — отримали:', res); // 10
      return res * 3; // 10 * 3 = 30
    })
    .then(res1 => {
      console.log('Третій .then — отримали:', res1); // 30
      return res1 * 3; // 30 * 3 = 90
    })
    .then(result => {
      console.log('Фінальний результат:', result); // 90
      console.log('Готово! Вивело 90');
    })
    .catch(err => {
      console.error('Помилка:', err);
    });
}

/* // Задача, приклад. Ланцюжки промісів
{
  // Крок 1: Закип'ятити воду
  function boilWater() {
    return new Promise(resolve => {
      console.log('Починаю кип’ятити воду...'); // "Починаю кип’ятити воду..."
      setTimeout(() => {
        console.log('Вода закипіла!');
        resolve('гаряча вода');
      }, 2000);
    });
  }

  // Крок 2: Засипати каву
  function addCoffee(hotWater) {
    return new Promise(resolve => {
      console.log('Засипаю каву в', hotWater);
      setTimeout(() => {
        console.log('Кава заварена!');
        resolve('смачна кава ☕');
      }, 1000);
    });
  }

  // Крок 3: Додати цукор (якщо хочеш)
  function addSugar(coffee) {
    return new Promise(resolve => {
      console.log('Додаю цукор у', coffee);
      setTimeout(() => {
        resolve('солодка кава');
      }, 500);
    });
  }

  // Крок 4: Пити каву
  function drink(coffee) {
    console.log('П’ю каву... Аааа, яка смачна!', coffee);
    console.log('День почався чудово!');
  }

  // ЗАПУСКАЄМО ЛАНЦЮЖОК!
  boilWater()
    .then(water => addCoffee(water)) // передаємо воду в наступний крок
    .then(coffee => addSugar(coffee)) // передаємо каву далі
    .then(sweetCoffee => drink(sweetCoffee))
    .catch(error => {
      console.error('Щось пішло не так:', error);
    });
}
 */
