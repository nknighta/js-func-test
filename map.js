const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item * 2);
console.log(newArr); // [2, 4, 6, 8, 10]

function conolearr () {
    arr.map((item) => console.log(`${item}`));
}

conolearr(); // 1 2 3 4 5