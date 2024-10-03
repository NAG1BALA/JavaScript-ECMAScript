function mergeArrays(arr1, arr2) {
    console.log(newArray = [...arr1, ...arr2]);
}

// mergeArrays([1, 2, 3], [4, 5, 6]);


function mergeArrays2(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays2([1, 2, 3], [4, 5, 6]));



function removeDuplicates(...args) {
    return args.filter((val, index) => args.indexOf(val) === index);
}


// const removeDuplicates = (...args) => args.filter((val, index) => args.indexOf(val) === index);

removeDuplicates(1, 2, 3, 2, 4, 1, 5);