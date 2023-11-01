function calc ({a, b}) {
  return a * b;
}

const result = calc({a: 10, b: 20});

console.log(result); // 200

console.log(calc({a: 10, b: 20})); // 200
console.log(`${calc({a: 10, b:20})}`); // 200