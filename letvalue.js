let value_desu;

function letvalue({first, second, bird}) {
    first = 20;
    second = 40;
    if (bird === false) {
        return 'ERR';
    }
    return first + second;
}

value_desu = letvalue({first: 10, second: 20, bird: false});

console.log(value_desu); // 60
