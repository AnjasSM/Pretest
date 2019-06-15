let mie = (money) => {
    let price = 2500;
    let get = money/price
    let promo = (get/4) + get
    return Math.floor(promo)
};

console.log(mie(50000));