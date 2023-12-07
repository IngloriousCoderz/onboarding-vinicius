{
  const sum = (a, b) => a + b;

  function memoize(func) {
    const cache = {};

    return (a, b) => {
      if (cache[`${a},${b}`] != null) {
        return cache[`${a},${b}`];
      }
      console.log("calculating");
      const result = func(a, b);
      cache[`${a},${b}`] = result;
      return result;
    };
  }

  const memoizedSum = memoize(sum);
  console.log(memoizedSum(2, 3));
  console.log(memoizedSum(2, 3));
}
