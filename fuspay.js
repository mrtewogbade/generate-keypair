
// Given two data sets

// DATA 1 : 100, 300, 400

// DATA 2: 300, 100, 500


// Find the 


// Sample Output: [400, 500]

function differenceArr(arr1, arr2){
    const sortedArr1 = arr1.sort((a, b) => a -b);
    const sortedArr2 = arr2.sort((a, b) => a - b);

    const merged = sortedArr1.concat(sortedArr2);
    const result = merged.filter((item) => {
        return !sortedArr1.includes(item) || !sortedArr2.includes(item);
    })

    return result;



}


console.log(differenceArr([100, 300, 400], [300, 100, 500]));