const obj = { a: 5, b: { c: { d: 10 } } };

function getKeys(obj) {
    let keys = [];
    Object.keys(obj).forEach(ele => {
        keys.push(ele);
        if (typeof obj[ele] === 'object') {
            keys = [].concat.apply(keys, getKeys(obj[ele]));
        }
    })

    return keys;
}


console.log('aaaaaaaa', getKeys(obj));