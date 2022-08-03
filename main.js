const dict = [
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

function convertToRoman(num) {
    let idx = 0;
    let romanNumber = "";
    while (num > 0 && idx < dict.length) {
        if (dict[idx][0] <= num) {
            num -= dict[idx][0];
            romanNumber += dict[idx][1];
        }
        else 
            idx++;
    }
    return romanNumber;
}
