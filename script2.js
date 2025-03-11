
// CLASSES
class user {
    constructor(fname, lname, email, password) { // FOR CREATING EACH NEW INSTANCE CONSTRUCTOR IS CALLED (ITS OPTIONAL)
        this.firstname = fname;
        this.lastname = lname;
        this.password = password;
        this.validity = email; // THE NAME SHOULD B THE SAME AS SETTER
    }
    get fullname() { // when using getter before class method the method can b called like class properties
        return `${this.firstname} ${this.lastname}`; // REMEMBER NO PARAM FOR GETTER AND ALWAYS A PARAM FOR SETTER
    }
    saywelcome() {
        return (`welcome ${this.fullname}!`)
    }
    set validity(email) { // USING SET
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            this.validemail = email;
        } else {
            throw Error("email is not valid")
        }
    }
}

const user1 = new user("daniel", "J", "daniel@google.com") // ITS NOT MANDATORY TO FILL ALL THE CONSTRUCTOR INPUTS
console.log(user1)
console.log(user1.saywelcome())
user1.password = "12345" // WE CAN MODIFY PROPERTIES
user1.password2 = "56789" // WE CAN ADD NEW PROPERTIES
console.log(user1)

try {
    const user2 = new user("james", "gordon", 'jamesg@gmail.c4562om');
    console.log(user2)
} catch (error) {
    console.log(error.message)
}


// STATIC & PRIVATE METHODS & PROPERTIES

// STATICS ONLY WORK WITH CLASSES // NON-STATICS ONLY WORK WITH INSTANCES

class User_2 {
    #password;  // THE PRIVATE PROPERTY SHOULD BE DEFINED FIRST IF ITS IN THE CONSTRUCTOR METHOD.
    constructor(password) {
        this.#password = password;
    }
    fname = "daniel";
    static lname = "j";
    #city = "isfahan";
    static sayhello() { console.log(`hi ${this.fname}`) }
}

console.log(User_2) // [class User_2] { lname: 'j' }
console.log(User_2.fname) // undefined CUZ ITS NOT STATIC & IT SHOULD BE CALLED BY ITS INSTANCE
const user3 = new User_2("45679")
console.log(user3) // User_2 { fname: 'daniel' }
console.log(user3.fname) // daniel
console.log(user3.lname) // undefined CUZ ITS STATIC & IT SHOULD BE CALLED BY ITS CLASS
console.log(user3.password) // undefined CUZ ITS PRIVATE
// console.log(user3.sayhello()) // raises error CUZ ITS STATIC & IT SHOULD BE CALLED BY ITS CLASS
User_2.sayhello() // hi undefined CUZ {this.fname} IS NOT STATIC



// INHERITANCE

class parent {
    constructor(fname) {
        this.fname = fname
    }
    lname = "J"
    property1 = "parent property1"
    property2 = "parent property2"
    sayhi() {
        console.log(`Hi ${this.fname} ${this.lname}!`)
    }
}

class child extends parent {
    constructor(fname) { // the child inherits the lname & here we modify the fname
        super(fname);
    }
    property1 = "child property1" // ITS POSSIBLE TO OVERRIDED THE PARENT property1 WITH NEW VALUE
    sayhi2() {
        super.sayhi(); // FOR CALLING SUPER METHOD WE SHOULD USE super
        console.log(`ur full name is ${this.fname} ${this.lname}`) // "this" WORKS FOR BOTH PARENT & CHILD PROPERTIES
    }
}

const p1 = new parent("Dan")
console.log("\n")
p1.sayhi()
const c1 = new child("David")
console.log(c1)
c1.sayhi2()
console.log("\n")

// Why Can’t We Define the Parent Constructor from a Child Instance?
// Because class-based inheritance follows a strict top-down approach:
// The parent must be constructed first to ensure the child can inherit its properties and methods.


class Parent2 {
    constructor(name) {
        this.name = name;
        console.log(`Parent constructor with name: ${this.name} called`);
    }
}

// **************** In JavaScript, child class constructors must call super() before accessing "this". *******************

class Child2 extends Parent2 {
    constructor(name, age) {
        super(name); // ***************** Calls Parent constructor *******************
        this.age = age;
        console.log(`Child constructor called with name: ${this.name} & age: ${this.age}`);
    }
}

let c2 = new Child2("Danny", 30);

console.log("\n")

// Yes, you can define a child class without a constructor. It will automatically inherit the parent’s constructor.
// If the child needs additional properties or custom logic, you must define a constructor and use super().
// Always call super() first in a child constructor before using "this".


class Parent3 {
    constructor(name) {
        this.name = name;
        console.log(`Parent3 constructor called with name: ${this.name}`);
    }
}

class Child3 extends Parent3 {
    // No constructor here, but it still works!
}

let c = new Child3("Danny");
