const palindromeNum = document.querySelector("#palindromeNum");
const btn = document.querySelector("#btn");
const outbox = document.querySelector("#outbox");

console.log(palindromeNum);
console.log(btn);

function checkNum () {
    debugger;
    let palindromeNumValue = palindromeNum.value;
    let sum = 0;
    console.log("palindromeNumValue value is : ", palindromeNumValue)
    // console.log("type of ", typeof palindromeNumValue) // string

    sum = Number(String(palindromeNumValue).split('').reverse().join(''))

    // console.log("typeof sum :" ,typeof sum)
    console.log("reversed number is : ", sum)

    if (! (palindromeNumValue === sum )) {
        console.log("this is palindrome number")
        outbox.innerHTML = "This is not palindrome number"
    } else {
        console.log("not a palindrome number")
        outbox.innerHTML = "This is palindrome number"

    }
}

btn.addEventListener("click", checkNum)