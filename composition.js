// 'hello world' -> 'HELLO WORLD' -> 'HELLO WORLD!' -> '<p>HELLO WORLD!</p>'
{
  const shout = (msg) => msg.toUpperCase();
  console.log(shout("hello world"));

  const punctuate = (msg, mark) => msg + mark;
  console.log(punctuate("hello world", "!"));

  const htmlize = (msg, tag) => `<${tag}>${msg}</${tag}>`;
  console.log(htmlize("hello world", "p"));

  console.log(htmlize(punctuate(shout("hello world"), "!"), "p"));
}

{
  const shout = (msg) => msg.toUpperCase();
  console.log(shout("hello world"));

  const punctuate = (mark) => (msg) => msg + mark;
  console.log(punctuate("!")("hello world"));

  const htmlize = (tag) => (msg) => `<${tag}>${msg}</${tag}>`;
  console.log(htmlize("p")("hello world"));

  const exclamate = punctuate("!");
  console.log(exclamate("hello world"));
  const pize = htmlize("p");
  console.log(pize("hello world"));

  console.log(pize(exclamate(shout("hello world"))));

  let msg = "hello world";
  msg = shout(msg);
  msg = exclamate(msg);
  msg = pize(msg);
  console.log(msg);
}

// (f o g o h)(x) = f(g(h(x))) // compose(f, g, h)(x) = f(g(h(x)))
// (f | g | h)(x) = h(g(f(x))) // pipe(f, g, h)(x) = h(g(f(x)))

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

{
  const shout = (msg) => msg.toUpperCase();
  const punctuate = (mark) => (msg) => msg + mark;
  const htmlize = (tag) => (msg) => `<${tag}>${msg}</${tag}>`;

  const exclamate = punctuate("!");
  const pize = htmlize("p");

  const composition = compose(pize, exclamate, shout);
  console.log(composition("hello world"));

  const piping = pipe(shout, punctuate("!"), htmlize("p"));
  console.log(piping("hello world"));
}
