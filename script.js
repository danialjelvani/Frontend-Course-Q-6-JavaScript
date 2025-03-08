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
    return text.replace(/(\b09\d{2})\d{3}(\d{4}\b)/g, "$1***$2") // capture () using $
}
console.log(securephonenumber2(mytext))


let myMap = new Map();
myMap.set(1, 'Car').set('weight', 1000).set('color', 'Blue');
console.log(myMap)
// Map(3) {1 => "Car", "weight" => 1000, "color" => "Blue"}

let personMap = new Map();

personMap.set('firstName', 'Abbas').set('lastName', 'Moqaddam');

// Map {"firstName" => "Abbas", "lastName" => "Moqaddam"}

let personArray = [...personMap];

// [ ["firstName" , "Abbas"] , ["lastName" , "Moqaddam"] ]

personArray = Array.from(personMap);

// [ ["firstName" , "Abbas"] , ["lastName" , "Moqaddam"] ]

let person = new Map();

person.set('firstName', 'Abbas').set('lastName', 'Moqaddam').set('age', 33);

person.get('lastName');

// "Moqaddam"

person.size;

// 3

person.delete('age');

// true

person;

// Map {"firstName" => "Abbas", "lastName" => "Moqaddam"}

person.delete('weight');

// false

person.clear();

person;

// Map {}

obj1 = {
    1: 1,   // Values in both objects and maps can be almost anything
    "2": "2",   // But KEYS in OBJECTS are only STRINGS even if we dont mention it in object defining
}              // But in MAPS KEYS can be almost ANYTHING form number and string to functions, etc.
console.log(obj1)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1)) // turn Objects to Arrays
console.log(Array.from(obj1)) // only work with Maps

console.log(...personMap.keys()) //maps is so like objects but faster safer with guaranteed order and
// directly iterable using forEach & for ... of  and countable using .size except for (Maps are not JSON-compatible)

/*

        // Objects force keys to be strings, but Map allows any type. //

let obj = {};
let map = new Map();

obj[1] = "one";       // Key is converted to a string: "1"
map.set(1, "one");    // Key remains a number

console.log(obj["1"]); // "one" (converted)
console.log(map.get(1)); // "one" (not converted)

        // Objects don’t maintain key order reliably, but Maps do. //

let obj = {};
let map = new Map();

obj["b"] = 2;
obj["a"] = 1;
map.set("b", 2);
map.set("a", 1);

console.log(Object.keys(obj)); // ['b', 'a'] (not guaranteed order)
console.log([...map.keys()]);  // ['b', 'a'] (insertion order)

        // Map is faster for frequent insertions and lookups. //

let map = new Map();
for (let i = 0; i < 1000000; i++) {
    map.set(i, i * 2);
}

console.time("Map Lookup");
console.log(map.get(999999));
console.timeEnd("Map Lookup"); 

let obj = {};
for (let i = 0; i < 1000000; i++) {
    obj[i] = i * 2;
}

console.time("Object Lookup");
console.log(obj[999999]);
console.timeEnd("Object Lookup");

        // Objects don’t have a built-in way to get their size, but Map does. //

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length); // 3

let map = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(map.size); // 3 (directly available)

        // Maps are directly iterable, while Objects require Object.entries(). //

let obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key, obj[key]); // a 1, b 2
}

let map = new Map([["a", 1], ["b", 2]]);
map.forEach((value, key) => console.log(key, value)); // a 1, b 2

*/
