const array = [0, 3,6,4,2,6,26,6,76,5,32,34,43,4,-12,-75,67,-1,-5,123,-213]
let itterationCount = 0

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let genNumIndex = Math.floor(arr.length / 2)
    let genNum = arr[genNumIndex]
    let less = []
    let greater = []

    for (let i = 0; i < arr.length; i++) {
        itterationCount++
        console.log('actuall number: ', genNum)
        if (i === genNumIndex)
            continue
        if (arr[i] < genNum) {
            less.push(arr[i])
        }
        if (arr[i] > genNum) {
            greater.push(arr[i])
        }
    }

    return [...quickSort(less), genNum, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(itterationCount)