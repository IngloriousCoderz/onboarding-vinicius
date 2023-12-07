{
  function sum(a, b) {
    return a + b;
  }

  console.log(sum(2, 3));
}

{
  const sum = (a, b) => a * 1000 + b;

  console.log(sum(2, 3));
}

{
  function sum(a) {
    a = a * 1000;
    return function (b) {
      return a + b;
    };
  }

  const sumTwo = sum(2);
  console.log(sumTwo(3));
  console.log(sumTwo(4));
  console.log(sum(2)(3));
}

{
  const sum = (a) => (b) => a + b;

  const sumTwo = sum(2);
  console.log(sumTwo(3));
  console.log(sum(2)(3));
}
