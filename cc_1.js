// Task 1: Variables and Data Types

let employeeName = "Jimi Hendrix";
const employeeID = 1942;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Guitars", "Drums", "Pianos"]
const productDetails = {
    name: "Music Store",
    price: 500.00,
    inStock: true,
}

console.log(products, productDetails);



// Task 3: Assignment Operators

let accountBalance = 50000.00;

accountBalance += 7000.00;
console.log("sum: ", accountBalance);

accountBalance /= 2.00;
console.log("division: ", accountBalance);

accountBalance -= 5000.00;
console.log("difference: ", accountBalance);

accountBalance *= 1.40;
console.log("multiplied: ", accountBalance);

accountBalance %= 1.5;
console.log("modulus: ", accountBalance);



// Task 4: Comparison Operators

let employeeScore1 = 9001;
let employeeScore2 = 5976;

console.log("Is employeeScore1 higher than eployeeScore2? ", employeeScore1 > employeeScore2);
console.log("Is employeeScore1 lower than eployeeScore2? ", employeeScore1 < employeeScore2);
console.log("Is employeeScore1 higher than or equal to eployeeScore2? ", employeeScore1 >= employeeScore2);
console.log("Is employeeScore1 lower tha or queal to eployeeScore2? ", employeeScore1 <= employeeScore2);
console.log("Is employeeScore1 equal to eployeeScore2? ", employeeScore1 === employeeScore2);
console.log("Is employeeScore1 not equal to eployeeScore2? ", employeeScore1 !== employeeScore2);



// Task 5: Logical Operators

let hasKeyCard = true
let hasPermission = false

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasPermission);

