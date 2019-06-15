const arr = [6,22,34,15,2,13,26,57,42,32];

let min = (arr) => {
    let arrMin = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arrMin > arr[i]) {
            arrMin = arr[i]
        }
    }
    return arrMin;
}

let max = (arr) => {
    let arrMax = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arrMax < arr[i]) {
            arrMax = arr[i]
        }
    }
    return arrMax;
}

let sort = (arr) => {
    //[6,22,34,15,2,13,26,57,42,32]
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let tamp = arr[i]
                arr[i] = arr[j]
                arr[j] = tamp;
            }
        }
    }
    return arr;
}

let reverseSort = (arr) => {
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let tamp = arr[i]
                arr[i] = arr[j]
                arr[j] = tamp;
            }
        }
    }
    return arr;
}


console.log(min(arr));
console.log(max(arr));
console.log(sort(arr));
console.log(reverseSort(arr));