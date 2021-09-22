function main() {
    document.querySelector('button').addEventListener('click', convert);
}

function convert() {
    const cipherText = document.querySelector('.text1').value;
    let plainText = [];

    // do all the stuff
    let i, len;
    for(i = 0, len = cipherText.length; i < len; i++) {
        if ((/[a-z]/).test(cipherText[i])) {
            plainText.push(String.fromCharCode(((cipherText[i]).charCodeAt() - 97 + 13) % 26 + 97));
        } else if ((/[A-Z]/).test(cipherText[i])) {
            plainText.push(String.fromCharCode(((cipherText[i]).charCodeAt() - 65 + 13) % 26 + 65));
        } else {
            plainText.push(cipherText[i])
        }
    }

    let output = plainText.join('');

    document.querySelector('.text2').textContent = output;
}

document.addEventListener('DOMContentLoaded', main);