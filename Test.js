for (let num = 1; num <=50; num++) {
    if (num % 3 === 0 && num % 5 === 0 ) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log(num);
    }

}

function reverseString(str) {
    return str.split('').reverse('').join('');
}

const inputString = "Nike Air Yeezy";
const reversedString = reverseString(inputString);
console.log(reversedString);