/* {
  console.log(1);
  console.log(2);

  setTimeout(function foo1() {
    console.log('FOO-01');
  }, 10000);

  console.log(3);
  console.log(4);

  setTimeout(function foo2() {
    console.log('FOO-02');
  }, 5000);

  for (let i = 0; i < 10; i++) {}
  console.log(i);
}
//setTimeout - команда, яка працює лише у браузері. */

// Функція + затримка
{
  const id1 = setTimeout(() => {
    alert('Ваші дані було викрадено, надійшліть ваш пароль');
  }, 2000);

  const id2 = setTimeout(() => {
    alert('Ваші дані було викрадено, надійшліть ваш пароль');
  }, 2000);

  const timeoutID = setTimeout(() => {
    alert('Ваші дані було викрадено, надійшліть ваш пароль');
  }, 2000);

  console.log(timeoutID);

  clearTimeout(timeoutID);
  clearTimeout(id1);
  clearTimeout(id2);
}
