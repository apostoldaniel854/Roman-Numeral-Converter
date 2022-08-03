function palindrome(str) {
    let l = str.length;
    let cleanStr = "";
    for (let i = 0; i < l; i++)
      if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9')) {
        cleanStr += str[i];
      }
    cleanStr = cleanStr.toLowerCase();
    l = cleanStr.length;
    console.log(cleanStr);
    let i = 0, j = l - 1;
    let isPalindrome = true;
    while (i < j) {
      if (cleanStr[i] != cleanStr[j])
        isPalindrome = false;
      i++;
      j--;
    }
    return isPalindrome;
  }
  