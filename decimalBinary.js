// let decimalToBinary = (number) => {
//     let result = '';
//     while(number > 0) {
//         result = number % 2 + result;
//         number = Math.floor(number/2)
//     }
//     return result;
// }
let reverseBin= (bin) => {
    let revBin = '';
    for(let i = bin.length; i > 0; i--) {
        revBin += bin[i-1]
    }
    return revBin;
}

let dec2Bin = (input) => {
    let bin = '';
    while(input > 0) {
        let mod = input % 2
        bin += mod;
        input = Math.floor(input/2)
    }
    for(let i = 0; i < bin.length; i++) {
        if(bin.length === 1 || bin.length === 2 || bin.length === 3) {
            bin += 0;
        }
    }
    let output = reverseBin(bin);
    return output
}

console.log(dec2Bin(17));