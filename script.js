let str = "&quotlove Enigma&quot"
let pattern = /enigma/i // i flag is for case insensitive
console.log(pattern.test(str))

let str2 = '&quot enigma 2035&quot' // \b word \b checks if the pattern is a whole word.
let pattern2 = /(?<= |^)enigma\s+\d/
console.log(pattern2.test(str2))
let result = pattern2.exec(str2)
console.log(result)
console.log(result.index)

//flags: g=global i=caseinsensitive

const phonepattern = /(^\+98\d{10}$)|(^0098\d{10}$)|(^0\d{10}$)/
const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let str3 = 'Hello, world!';
console.log(str3.indexOf('world')); // 7

let str4 = 'JavaScript!';
console.log(str4.match(/[aeiou]/g)); //["a", "a", "i"]
console.log(str4.search(/[aeiou]/g)); 1
console.log(str4.replace(/[aeiou]/g, 'U'));

function formatphonenumber(num) {
    return /^09/.test(num) ? num.replace(/^0/, "+98") : null
}

console.log(formatphonenumber("09103003231"))

// You can use regex for HTML input validation in two main ways:

//             USING PATTERN

/* <form>
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone"
       pattern="^(\+98|0)?9\d{9}$"
       title="Enter a valid Iranian phone number (e.g., +989123456789 or 09123456789)"
       required>
<button type="submit">Submit</button>
</form>

//             USING JAVASCRIPT DOM

<form id="myForm">
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" required>
    <span id="error-message" style="color: red;"></span>
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = "Invalid email format!";
    } else {
        errorMessage.textContent = "";
    }
});
</script>

*/

function replaceat(str, index, replacement) {
    let arr = str.split('');
    arr[index] = replacement;
    return arr.join('');
}
function securephonenumber(text) {
    let result = (text.match(/\b09\d{9}\b/g));
    if (!result) return text; // If no matches, return original text
    updatedtext = text;
    result.forEach(num => {
        index = updatedtext.indexOf(num);
        updatedtext = replaceat(updatedtext, index + 4, '*')
        updatedtext = replaceat(updatedtext, index + 5, '*')
        updatedtext = replaceat(updatedtext, index + 6, '*')
    })
    return updatedtext;
}

let mytext = "This is a sample text. Winner phone numbers are 09216557777, 09123232568 and 09363636982."
console.log(securephonenumber(mytext))

// NOW THE EASY WAY WITH CALLABLE CAPTURED REGEX:

function securephonenumber2(text) {
    return text.replace(/(\b09\d{2})\d{3}(\d{4}\b)/g, "$1***$2")
}
console.log(securephonenumber2(mytext))