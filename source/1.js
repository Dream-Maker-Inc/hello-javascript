const arr = [5, 8, 4, 9, 2, 1, 3, 6, 0, 7, 10];

const sortedArr = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
})

console.log(sortedArr);