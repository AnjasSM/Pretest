let triangle = (input) => {
    if(0 < input < 10) {
        let primeNumber = [];
        for(let i = 2; i <= 30; i ++) {
            if(i >= 2) {
                prima = true;
                for(j = 2 ; j < i; j++) {
                    if(i%j == 0) {
                        prima = false;
                    }
                }
            }if(prima == true) {
                primeNumber.push(i);
            }
        }
        let line = ''
        for(let i = 0; i < input; i++) {
            for(var j= 0; j <= i; j++){
                line += primeNumber[j]
                line += ' '
            }
            line += '\n'
        }
        return line
    } else {
        return console.log('input yang anda masukkan harus lebih dari 0 dan kurang dari 10');
    }
}

console.log(triangle(9));
