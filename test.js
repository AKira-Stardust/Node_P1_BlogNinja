// const text = "Hello World!";

// console.log(text);

const hello = name => console.log(`Hello ${name}!`);

hello("Yami");
hello("Hong Banjang");

const x = [2,3,4];
const [n] = x;
console.log("This is n: " + n);

const t = 4.2;
console.log(typeof(t));

const txt = "grey is a grey cover of grey";
let xs = txt.split(" ");
console.log("Split value is: "+ xs.length);

const cars = ["Saab", "Rolce-Royce", "BMW"];
cars[100] = "Ford";
console.log("cars length is: " + cars.length);
