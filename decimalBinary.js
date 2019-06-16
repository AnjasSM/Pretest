// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Input your decimal number :");

// When user input data and click enter key.
standard_input.on('data', function (data) {
    let reverseBin = (bin) => {
        let revBin = '';
        for (let i = bin.length; i > 0; i--) {
            revBin += bin[i - 1]
        }
        return revBin;
    }

    let dec2Bin = (input) => {
        let bin = '';
        while (input > 0) {
            let mod = input % 2
            bin += mod;
            input = Math.floor(input / 2)
        }
        for (let i = 0; i < bin.length; i++) {
            if (bin.length === 1 || bin.length === 2 || bin.length === 3) {
                bin += 0;
            }
        }
        let output = reverseBin(bin);
        return output
    }
    // Print user input in console.
    console.log(`binary : ${dec2Bin(data)}`);
    process.exit()
});