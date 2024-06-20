const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// looking for a index of searching element

// O(n)

let BinarySearch = (arr, e, start, end) => {
    itterationCount++
    let middle = Math.floor((start + end) / 2)
    if (e === arr[middle]) {
        return middle
    } else if (e < arr[middle]) {
        return BinarySearch(arr, e, 0, middle - 1)
    } else if (e > arr[middle]) {
        return BinarySearch(arr, e, middle + 1, end)
    } else {
        return -1;
    }
}

let itterationCount = 0
console.log('Index result:', BinarySearch(array, 13, 0, array.length));
console.log('Itterations: ', itterationCount)

itterationCount = 0
console.log('Index result: ', BinarySearch(array, 3, 0, array.length));
console.log('Itterations: ', itterationCount)
