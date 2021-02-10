import _ from "lodash";
/* import { orderBy, isEqual, debounce } from 'lodash';  */

const products = [
  {
    name: "Product A",
    price: 15.99,
  },
  {
    name: "Product B",
    price: 8,
  },
  {
    name: "Product C",
    price: 10.5,
  },
  {
    name: "Product D",
    price: 4.95,
  },
];

const orderedProducts = _.orderBy(products, ["name"], ["asc"]);

console.log(orderedProducts);

const product1 = {
  name: "Product",
  price: 5,
};

const product2 = {
  name: "Product",
  price: 5,
};

console.log(product1 === product2);
console.log(_.isEqual(product1, product2));

const input = document.querySelector("input");

function logKey(e) {
  console.log(e.key);
}

input.onkeyup = _.debounce(logKey, 800, { leading: true, maxWait: 1000 });
