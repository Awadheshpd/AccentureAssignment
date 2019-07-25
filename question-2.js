// to map the array

var arr = ['hello world', 'hello world'];

function mapCharArray(arr) {
    let charArr = [];
    const result = {};

    arr.forEach(element => {
        charArr = [].concat.apply(charArr, [...element]);
    });

    charArr.forEach(element => {
        if (!result[element]) {
            result[element] = 1;
        } else {
            result[element] = result[element] + 1;
        }
    });
}
mapCharArray(arr);