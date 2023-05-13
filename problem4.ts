function romanNumerals(value: number): string {
  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  let romanNumeral = "";
  for (const [num, symbol] of romanMap) {
    while (value >= num) {
      romanNumeral += symbol;
      value -= num;
    }
  }
  return romanNumeral;
}

console.log(romanNumerals(6))
console.log(romanNumerals(9))
console.log(romanNumerals(23))
console.log(romanNumerals(2021))
console.log(romanNumerals(1646))