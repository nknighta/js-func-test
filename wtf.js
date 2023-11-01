let omae = false;
let nani = false;

function wtf({first, second}) {
    if (first === false && second === false) {
        return 'wtf';
    } else if (first === true && second === false ) {
        return 'wtf2';
    } else {
        return 'wtf3';
    }
}

const result = wtf({first: omae, second: nani});
console.log(`${omae}, ${nani}`);
console.log(result);