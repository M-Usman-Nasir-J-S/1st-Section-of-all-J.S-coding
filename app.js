// 01 Introduction class Started


// console.log("hello javascript!");


// data type

//string "" ''
//number 20 
//boolean true | false


// console.log("asdasdasd@#@$@#24234234")


// console.log(typeof("true"))

// ()

// variable number sa start nahi hoga end ma daal skta hain.
// special character $ _ ka illawa koi bhi use nahi hoga
// camel case use krainga.


// var fullname = "abdullah";
// var age = 21;
// var isLoggedIn = true;
// console.log(fullname , age , isLoggedIn);



// var username = "Abdullah"; // declare | initialize
// console.log(username);
// var username = "usman" // redeclare
// console.log(username);
// username = "ammar" // reassign
// console.log(username);


// alert("hello world")












// 01 Introduction class Ended









// 02-Operation & Expressions Started















// console.log(typeof("hello world"));
// console.log(typeof(20));
// console.log(typeof(true)); 

// alert("hello world");
// var username = prompt("enter your name");
// console.log(username);



//Arithmatic Operator

// +
// -
// *
// /
// %


// var num1 = 20;
// var num2 = 3;
// console.log("2" + "23"); // concatination
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// console.log(num1 % num2);

// console.log("hello" + "next console" )



//Assignment Operator
// =
// +=
// -=
// /=
// *=

// var num = 20;
// num = num + 30;
// num += 30;
// console.log(num);



//Comparision Operator

// >
// <
// == 
// === 
// !=
// !== 
// >=
// <=


// console.log(20 > 30);
// console.log(20 < 30);
// console.log(20 == "20");
// console.log("20" === "20");
// console.log(20 >= 20);
// console.log(20 <= 20);


// console.log(2 != "2");
// console.log(2 !== "2");



// user sa 4 subject ka marks lena hain through prompt, total marks and percentage nikaalni ha 


// var engMarks = prompt("enter english marks");
// var urduMarks = prompt("enter urdu marks");
// var mathMarks = prompt("enter maths marks");
// var comMarks = prompt("enter computer marks");

// var totalMarks = 400;
// var obtainedMarks = engMarks + urduMarks + mathMarks + comMarks;
// console.log(obtainedMarks);



// 02-Operation & Expressions Ended





//logical Operator

//&& == and
//|| == OR

// || OR = urdu wala Yaa
// && and = urdu wala ORR


// console.log("True" && "False");
// console.log("True" && "False" && "True" && "True");
// console.log("True" || "False" || "True" || "True");
// console.log("True" && "True" || "True" && "True");



// if means code check kare ga
// else means mazeed ye ke // aur also 


// var age = +prompt ("entre your age") 

// if (age < 18) {
//     console.log("Gym men admission nahi mille ga");
// }

// else {
//     console.log("aaja bhai gym");
    
// }




// var age = +prompt ("entre your age ?") 

// if (age >= 18) {
//     console.log("Welcome in my gym first paid your payment 2000 R:S");

// }

// else if (age >= 15) {
//     console.log("First paid 1000 extra then entre in my gym");
    
// }

// else {
//     console.log("Gym men admission nahi millega barha hokar aa culti shah ka nara laga");
    
// }












// 02-Operation & Expressions Ended










// 03-Functions Started









// function onePlusAvg(x, y) {

//     return 1 + (x + y) / 2

// }

// var a = 4
// var b = 8
// var c = 12

// console.log("One Plus Average of a and b is ", onePlusAvg(a , b));
// console.log("One Plus Average of a and c is ", onePlusAvg(b , c));
// console.log("One Plus Average of b and c is ", onePlusAvg(a , c));






// function Hello () {
//     console.log("Bro How are you ?");
    
//     return "hi"
// }

// var v = Hello();
// // Hello();--> to jo bhe cheez return hoti hen na who is ke under aajati he !

// console.log(v);






// function greatuser(username) {
    
//     return "Hello " + username
// }

// alert ( greatuser ("Write your name"));

// console.log("This is your name ?");




/* Sir work Start */




// function hello() {

//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");

// }

// hello();


    

// function sum(num1 , num2) {  //parameter receive krna
//     console.log(num1 + num2);
// }

// sum(20 , 30); 
// sum(50 , 50); // argument send krna. 
// sum(80 ,60);  







// function greetUser(username){
//     console.log("Hello " + username)
// }

// greetUser("Abdullah");
// greetUser();







// function multiply(num1, num2) {

//     return num1 * num2
// }

// var totalValue = multiply(15, 500);
// console.log(totalValue);









// 03-Functions Ended







                        /* Dom manipulation it's a topic name */








// DOM-intro with functions Started





// var hello;
// console.log(hello);

/* this is a undifined value */






// aik function banaan ha jisma user sa uska username or uski age leni ha. agar age 18 sa bari hojaye to "welcome to our gym" warna "get lost"











// function admission(username , age){
    
//     if(age >= 18){
//         console.log("welcome to the gym " + username)
//     }
//     else{
//         console.log("maalik admission nahi hoga");

//     }
// }

// admission("abdullah" , 18);
// admission("usman" , 30);
// admission("huzaifa" , 12);
// admission("ammar" , 17);




// function greetUser(username) {
//     console.log("hello " +  username , /* email , age */ )
// }

// greetUser("Abdullah", 20, "mabdullah@gmail.com")








// function sum(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
// }

// // var total = sum(10, 10)
// // console.log(total)

// console.log(sum(40, 60));




// var username = prompt("Enter your full name");
// console.log(username);










// function greetUser(username) {
//     return "hello " + username
    
// }

// alert(greetUser("abdullah"))








// function multiply(num1, num2) {

//     return num1 * num2
// }

// var totalValue = multiply(20, 600);
// console.log(totalValue);







// function calculatePercentage(sub1, sub2, sub3) {
//     var totalMarks = 300;
//     var obtainedMarks = sub1 + sub2 + sub3;
//     var percentage = obtainedMarks / totalMarks * 100;
//     return percentage + "%"
// }




// // var hassan = calculatePercentage(80, 40, 90);
// // console.log(hassan);
// var student2 = calculatePercentage(70, 30, 90)
// console.log(student2);





// var head = document.querySelector("#head")
// head.innerHTML = "changed through javascript"




// var para = document.querySelector(".para");

// para.innerHTML = "lorem abc batch 12 <br/> behtreen class nahi ha."


// var div = document.querySelector("div");

// div.innerHTML = "<h1>Hello inside div</h1><p>Lorem ipsum dolor sit amet.</p><ul><li>Home </li><li>About </li><li>Contact</li></ul>"




// var div = document.querySelector("div");







// function hello() {
//     console.log ("hello world")
//     div.innerHTML = "<h1>Hello inside div</h1><p>Lorem ipsum dolor sit amet.</p><ul><li>Home </li><li>About </li><li>Contact</li></ul>"
// }



// var head = document.querySelector("#head");



// function changeValue() {
//     // console.log("func");
//     if (head.innerHTML === "On") {
//         head.innerHTML = "Off"
//     } else {
//         head.innerHTML = "On"
//     }
// }



// var num1 = document.querySelector("#num1");
// var num2 = document.querySelector("#num2");
// var h1 = document.querySelector("#total");






// function sum() {
//     var total = +num1.value + +num2.value
//     h1.innerHTML = total

//     num1.value = ""
//     num2.value = ""
// }


// dom manipulation




// Simpl Countetr





// var heading = document.querySelector("#heading");

// function incerment(){
    
//     heading.innerHTML++;
// }

// function decerment(){
    
//     if (heading.innerHTML>0) {
//         heading.innerHTML--;
//     }
//     else(
//         heading.innerHTML
//     )
// }

// function reset(){
//     heading.innerHTML = 0;
// }




// chapati counter


// var heading = document.querySelector("#heading");

// function increament(){
//     heading.innerHTML = ++heading.innerHTML;
// }

// function decreament(){
//     if(heading.innerHTML > 0){
//         --heading.innerHTML;
//     }   
// }


// function reset(){
//     heading.innerHTML = 0;
// }























/* Array  Topic Started */ 





// var username = "abdullah"


// var fruit1 = "mango";
// var fruit2 = "orange";
// var fruit3 = "banana";
// var fruit4 = "apple";





// index 0
// length 1








// var fruits = ["apple", "banana", "orange", "mango", 23, true];

// console.log(fruits[3])












// var users = ["abdullah", "usman", "ammar", "raheel", "affan"]
// console.log(users.length)






/* i learned these topics */

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof








// var fruits = ["mango", "orange", "watermelon", "banana", "apple", "pineapple", "guava"];


// console.log(fruits[3]);

// fruits.push("Strawberrey");

// fruits.pop("");

// fruits.unshift("Strawberrey");

// fruits.shift();



// fruits.splice(2, 4);


// fruits.splice(3, 7, "nashpati", "update", "how", "guys", "Baby");

// fruits.splice(4, 0, "strawberry", 1, 2, 3, true);


// fruits.splice(2, 4);


// ***Splice ulta kaam kar raha he jab us ko veriable men alag se define kia 
// to pehla delete kar raha he aur dosra fruits ke quantity bata raha he *** ye slice he 

// var newArr = fruits.slice(3, 7);

// var newArr = fruits.slice(3);

// console.log(newArr);



// console.log(fruits);




// My Own Build


// var pets = ["cat", "dog", "goat", "cow", "camel", "mouse", "buffello", "graf", "zaibra", "Lion"]

// console.log(pets[6]);

// pets.push("Human")
// pets.pop()
// pets.unshift("how")
// pets.shift()
// pets.splice(2, 2)

// let array = ["apple", "Banana", "cherry"];
// let str = array.join(); // Joins with a comma by default
// console.log(str); // Output: "apple,banana,cherry"

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let newArray = array1.concat(array2);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// let array = [3, 1, 4, 1, 5, 9, 2, 8, 0, 4, 0, 5, 6];
// array.sort(); // Sorts as strings by default
// console.log(array); // Output: [1, 1, 3, 4, 5, 9]

// pets.reverse();
// console.log(pets);

// let fruits = ["apple", "banana", "cherry", "date"];
// let index = fruits.indexOf("cherry");
// console.log(index); // Output: 2 (Index of "cherry");





// Own Build


// var myName = ["Usman", "Nasir", "JS"];
// console.log(typeof (myName));


// console.log(myName.join (" "));

// var sirName = myName.join("  ");
// var lastName = sirName.split("  ");

// // console.log(sirName);

// console.log(lastName);






// SIR Build


// var myName = ["Muhammad", "Abdullah", "Khan"];
// // console.log(typeof (myName));


// console.log(myName.join(" "));


// var arrStr = myName.join(" ");
// var arr = arrStr.split(" ");
// // console.log(arrStr);
// console.log(arr);












// var str = "Azam is intelligent boy";
// console.log(str.split("e"))





// var str = "abcdefgh"
// console.log(str.split("").reverse().join(""));












// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var newArr = arr1.concat(arr2);
// console.log(newArr);











// var arr = [7, 5, 3, 9, 6, 2, 1, 4,];
// // console.log(arr.sort());
// // console.log(arr.indexOf(0));
// console.log(arr.includes(8));







// var arr = new Array("abc", "def")
// console.log(arr);






// var userPreference = prompt("enter first color")
// var colours = ["purple", "orange", "red", "black"]

// colours.unshift(userPreference);

// console.log(colours);







/* Array  Topic Ended */






// // console.log("hello world")




// for loop
// while loop
// do while loop




// for (var i = 0; i < 10; i++) {
//     console.log("hello world", i)
// }








// var num = 21;

// console.log(num + " * " + 1 + " = " + num * 1);
// console.log(num + " * " + 2 + " = " + num * 2);
// console.log(num + " * " + 3 + " = " + num * 3);
// console.log(num + " * " + 4 + " = " + num * 4);
// console.log(num + " * " + 5 + " = " + num * 5);
// console.log(num + " * " + 6 + " = " + num * 6);
// console.log(num + " * " + 7 + " = " + num * 7);
// console.log(num + " * " + 8 + " = " + num * 8);
// console.log(num + " * " + 9 + " = " + num * 9);
// console.log(num + " * " + 10 + " = " + num * 10);


// for (let i = 0; i <= 10; i++) {
//     console.log(num + " * " + i + " = " + num * i);
    
// }



// var num = 2

// for (var i = 1; i <= 10; i++) {
//     console.log(num + " * " + i + " = " + num * i)
// }





// var head = document.querySelector("#head-one");

// function changeText() {
//     console.log("function called")
// }







// var username = "abdullah";
// var age = 20;

// console.log("your username is " + username + " and your age is " + age)

// console.log(`hello world ${username}`);

// console.log(`your username is ${username} and your age is ${age}`);





// console.log("before loop")

// for (var i = 0; i < 10; i++) {
//     console.log("inside loop")
// }

// console.log("after loop")









// for (var i = 1; i <= 100; i++) {
//     console.log("outside nested loop");

//     for (var j = 1; j <= 10; j++) {
//         // console.log("inside loop");
//         console.log(`${i} * ${j} = ${i * j}`);

//     }
// }











// // infinite loop

// for(var i = 11; i > 10; i++)


// // is in fine loop ko mat chalana... 
// // kio ke is se Copputer/Laptop kharab hone ka khatra hota he...?
// // ! kion ke ye unlimited hota he aur chalta he rahta he; 










// for (var i = 10; i < 5; i++) {
//     console.log(i)
// }


// var i = 0

// while (i < 10) {
//     console.log(i)
//     i++
// }











// do while loop


// var i = 15
// do {
//     console.log(i)
//     i++
// } while (i < 5)








// var div = document.querySelector("div");

// var fruits = ["mango", "banana", "apple", "orange", 23]

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
//     div.innerHTML += `${fruits[i]} <br/>`
// }









// .)  array ko screen pa render krwana
// .)  for loop
// .)  push or splice
// .)  template literals

// These all 4 points are helping in make a todo aap !














 // Simple Counter Started





 var heading = document.querySelector ("#heading")


function increase() {
    
    heading.innerHTML = ++heading.innerHTML

}


function decrease() {
    if (heading.innerHTML > 0) {
        --heading.innerHTML
    }
}

function reset() {
    heading.innerHTML = 0;
}




// Simple Counter Ended














// Time Table Started





var input = document.querySelector("#input");

var output = document.querySelector("#output")

function table(){

    tableError.innerHTML = "";

    output.innerHTML = "<h1>Your Written Table Here!</h1>"

    for(var i=1; i<=10; i++){ 

        output.innerHTML += `${input.value} x ${i} = ${input.value * i}<br/>`
    
    }

}




// Time Table Ended





// Todo App Cooding Started




var input = document.querySelector("#input");

var array = [];

var printArr = document.querySelector("#renderArr")

function renderArray() {

    printArr.innerHTML = ""
 
    for (var i = 0; i < array.length; i++) {
 
        printArr.innerHTML += `<li>${array[i]}
        <button onclick = "deleteTodo(${i})" class = "delete satisfy-regular">delete</button>
        <button onclick = "editTodo(${i})" class = "edit satisfy-regular">edit</button>
        </li>`
    }

}


function submit() {
 
    // console.log(input.value)
    array.push(input.value)
    // console.log(array);
 
    renderArray()
    input.value = ""

}



function deleteTodo(index) {

    array.splice(index, 1);
    renderArray()

}



function editTodo(index) {

    var updatedVal = prompt('enter updated value');
    array.splice(index, 1, updatedVal);
    renderArray()

}




// Todo App Cooding Ended

