function romanNumerals(value: number) {
    const numeral = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 100,
        D: 500,
        CM: 900,
        M:  1000,
    };

    let result = '';
    for (let i in numeral) {
        while (value >= numeral[i]) {
            result += i
            value -= numeral[i]
        }
    } 
  return result;
}

console.log(romanNumerals(6));
console.log(romanNumerals(9));
console.log(romanNumerals(23));