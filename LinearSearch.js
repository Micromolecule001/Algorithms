const array = [10,2,8,3,5,2,9,2,3,11,1,4];
let itterationCount = 0;
let searchSuccess = 11;
let searchFault = 44;

// looking for a index of searching element

// O(n)

let LinearSearch = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        itterationCount++;
        if (arr[i] === e) {

            console.log('Itterations: ', itterationCount);
            itterationCount = 0;

            return i;
        };
    };
    
    console.log('Itterations: ', itterationCount);
    console.log(`There is no ${e} in ${arr}`);
    
    itterationCount = 0;

    return -1;
}

console.log(LinearSearch(array, searchFault));
console.log(LinearSearch(array, searchSuccess));
