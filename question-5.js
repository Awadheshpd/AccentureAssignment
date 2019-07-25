// remove duplicates from array

function removeDuplicates(arr) {
    return arr.filter((v,i) => arr.indexOf(v) === i);
}