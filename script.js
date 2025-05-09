
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
// let guess = Number(prompt("Guess a Number"));
const guess = 57;

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

//functions

function myFun(value){
    console.log("Hello", value * 48 );
}

myFun(7);

function alpha(){
    const num = 50
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
}
alpha();

function newFun(a, b, c){
    return a + b + c;
}

console.log(newFun(16, 57, 75));

function fun(name = "Sanmith"){ //default value
    console.log("My name is", name );
}

fun();
fun("Shanki");

//function expreation
const exp = function funt(){
    console.log("Hello world")
}

exp();

// const timer = setTimeout(()=>{
//     console.log("Hello world sanmith ");
// },4000);

// timer;

let letter = "    sanmith devadiga "
function cap(){
    console.log(letter.charAt().toUpperCase(), str.slice(1))
}
cap();

console.log(letter.length);
console.log(letter.toUpperCase())
let trimed = letter.trim();
console.log(trimed);

let lett = "My name is sam";
let check = str.includes("name");
console.log(check);

let rep = lett.replace("sam", "sanmith" );
console.log(rep)

console.log(str.split(" "));

const arr = ['sanmith', 46, '9.19' ];
console.log(arr);
console.log(arr.length);

console.log(arr.pop())
let newItem = arr.push("SNMP,");
console.log(newItem);

const arr2 = ["DCS", "Mudbidri"];
const newArry = arr + arr2;
console.log(newArry.split(" ").join(",").toUpperCase());

const arr3 = [8, 47, 25, 17, 35, 64, 24];

console.log(arr3.sort((a, b)=>{
    return a - b
}));

let arr4 = [1,2,3,4,5,6];
let arr5 = [5,4,3,2,1,0];
let arr6 = [...arr4, ...arr5];
console.log(arr6);

let mapFun = [1,2,3,4,5,6,7,8,9,0];

const newMap = mapFun.map((data)=>{
    console.log(data * 2)
});

const forE = mapFun.forEach(element => {
    console.log(element , "Numbers")
});

const fil = mapFun.filter((data)=>{
    return data % 2 === 0;
});

console.log(fil);

const redu = mapFun.reduce((prev, curv)=>{
    return prev + curv;
});

console.log(redu);

//object
let obj = {
    a: 1,
    b: 2,
    c: "Sanmith"
}
console.log(obj);
console.log(obj.c)
console.log(obj.c = "sanmith devadiga")

let myAge = 20;

console.log(obj["myAge"]);

let key = Object.keys(obj) && Object.values(obj) ;
console.log(key);
