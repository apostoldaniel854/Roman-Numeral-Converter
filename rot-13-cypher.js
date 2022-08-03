function rot13(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            let code = str.charCodeAt(i);
            code = code - "A".charCodeAt(0);
            code -= 13;
            if (code < 0)
                code += 26;
            code = code + "A".charCodeAt(0);
            decoded += String.fromCharCode(code);
        }
        else {
            decoded += str[i];
        }
    }
    return decoded;
}
  
rot13("SERR PBQR PNZC");