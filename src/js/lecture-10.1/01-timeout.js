{
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
