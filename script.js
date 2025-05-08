
let a = 0;

console.log(++a);

console.log(a++);
console.log(a);

// const age = prompt("Enter a age");

// let book = age < 20 ? "User cannot book" : "User booked";

// console.log(book);

// const name = prompt("enter name");
// const password = prompt("Password");

// const result = ( name && password ) ? "Login successful" : "Login failed";

// console.log(result)

const username = "Sanmith";
console.log(username);

//logical operator
console.log(5 & 3)
console.log(8 | 2)
console.log( ~2)

//booleans
let val = (true && 2) ? "True" : "False";
console.log(val);

//conditions
const userAge = 67;

if(userAge < 18 ){
    console.log("Child");
}else if(userAge <= 60){
    console.log("Senior");
}else{
    console.log("Old age")
}

//switch

const numb = 40;

switch (numb) {
    case 18:
        console.log("Under 18")
        break;
    case 40:
        console.log("User 40");
        break;
    case 60:
        console.log("More than 60");
        break;
    default:
        console.log("User Age")
        break;
}

// for loops

const c = 11;

for(let i = 1; i < c; i++ ){
    console.log(i)
}

//while loop
const d = "Sanmith";
let i = 1;
while (i < 10) {
    console.log(d);
    i++
}

//do while loop
// let f = 100
// do {
//     console.log("sam");
//     f++
// } while (f > 11);

//for loop of for string
let str = "My name is sanmith devadiga";

for(let ch of str ){
    console.log(ch[0])
}

//for key
for(let ch in str){
    console.log(ch)
}

const value = 100;

for(let i =0; i < value; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

let newStr = 'Sanmith Devadiga';
let count = 0;
let newCount = 0;
for (let ch of newStr){
    if(ch === 'a' || ch === 'A' || ch === 'e' || ch === 'E' || ch === 'i' || ch === 'I' || ch === 'o' || ch === 'O' || ch === 'u' || ch === 'U' ){
       count++;
       newCount++
    };
}
console.log("Vowel", count);
console.log("Conssonet", newCount );

//sum of n number
let sum = 0;
const userNumber = 500;

for(let i = 1; i <= userNumber; i++){
    sum += i
}
console.log("sum ",sum);

//Knock game

const camNum = Math.round(Math.random() * 100);
let guess = Number(prompt("Guess a Number"));

if(isNaN(guess)){
    console.log("Please enter again")
}else if (guess < camNum){
    console.log("Too low");
}else if(guess > camNum){
    console.log("Too High");
}else if(guess === camNum){
    console.log("Congrats")
}else{
    console.log("Restart")
}