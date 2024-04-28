// console.log(pi)
//Iterating an Array

// let array = [20,10,15,30,45,40,60]

// for(let i=0;i<array.length;i++)
// {
//     console.log(array[i])
// }

// for in - array and json
// for of - array
// forEach //array functions

//for in

// for(let i in array)
// {
//     console.log(typeof(i))
//     console.log(i,array[i])
// }

//for of

// for(let i of array)
// {
//     console.log(i)
// }

// forEach

// array.forEach((value,index)=>{
//     console.log(value,index)
// })


//Iterating Objects

// let details = {
//     name:"Arun",
//     email:"arun@gmail.com",
//     mobile:"+91 9889134543",
//     city:"Kota"
// }

//for in

// for(let i in details)
// {
//     console.log(details[i],i)
// }

// console.log(Object.keys(details)) //gives all the keys of objects   
// console.log(Object.values(details)) //gives all the values of objects

// Object.keys(details).forEach((e)=>{
//     console.log(details[e])
// })


// let details = [
//     {
//         name:"Arun",
//         email:"arun@gmail.com",
//         mobile:"+91 9889134543",
//         city:"Kota"
//     },
//     {
//         name:"Raj",
//         email:"raj@gmail.com",
//         mobile:"+91 9889134543",
//         city:"Jaipur"
//     },
//     {
//         name:"Abi",
//         email:"abi@gmail.com",
//         mobile:"+91 9889134543",
//         city:"Udhaipur"
//     }
// ]

// for(let student of details)
// {
    // Object.keys(student).forEach((e)=>{
    //     console.log(e, student[e])
    // })

    // for(let e in student)
    // {
    //     console.log(e,student[e])
    // }
// }


//normal function
// function getData(){

// }

//arrow function
// ()=>{

// }

//IIFE - Immdieately Invoked Function Expression

// function sum(a,b)//named function
// {
//     return a+b
// }

// let sum = (a,b)=>a+b// no return statement required for arrow function if it have only one line

// let sum = (a,b)=>{//all arrow functions are always anonyumos
//     return a + b
// }
// console.log(sum)


// console.log(sum(10,5))


//1. Write a program to find the given year is Leap year or not using normal function and Arrow Function

//1. Century Year -> divisible by 400
//2. Non Century Year divisible by 4

// function 
// (function (){

//     }
// )();
//     if((year%100===0 && year%400===0) || (year%100 !== 0 && year %4===0))
//     {
//         return "Leap Year"
//     }
//     else
//     {
//         return "Not a Leap Year"
//     }
// }

// let leapyear = (year)=>{
//     if((year%100===0 && year%400===0) || (year%100 !== 0 && year %4===0))
//     {
//         return "Leap Year"
//     }
//     else
//     {
//         return "Not a Leap Year"
//     }
// }


// console.log(leapYear(1800))


//IIFE
// let sum = (function (a,b){//annonymous function
//        return a+b
//     }
// )(10,5)

// console.log(sum)

// let sum = ((a,b)=>{
//     return a+b
//  }
// )(10,5)

// console.log(sum)


//2. Print odd numbers in an array using IIFE

// let a = [8,7,5,3,4,2,6,10]

// let oddNumbers = ((array)=>{//scope starts
//     let odd = []
//     for(let i of array)
//     {//scope 2 starts
//         if(i%2!==0)
//             odd.push(i)
//     }//scope 2 ends
//     return odd
// })(a);//scope ends

// console.log(oddNumbers)

// var
// 1. Variables will be hoisted
// 2. Global Scope Variable
// 3. Re-Declaration is allowed
// 4. Re-Assignment is allowed

//let
//1. Prevents Hoisting
//2. Local Scope Variable
//3. Re-Declaration not possible
//4. Re-Assignment is possible

//Const
// 1. Same as let
//2. Re-Assignment is not possible


//Hoisting
// console.log(pi)
// var pi = 3.14
// console.log([pi])

// let pi = 3.14
// console.log(pi)


//Scoping - block of code - if,else,else if, for, functions
// var - Global scope
// let - Local Scope

// if(true)
// {//scope start
//     var a = 10
//     console.log('Inside Scope',a)
// }//scope end

// console.log('Outside Scope',a)

// let a = 5
// if(true)
// {//scope start
//     let a = 10
//     console.log('Inside Scope',a)
// }//scope end

// console.log('Outside Scope',a)

// var a = 5
// if(true)
// {//scope start
//     var a = 10
//     console.log('Inside Scope',a)
// }//scope end

// console.log('Outside Scope',a)


//const
// const pi = 3.14
// console.log(pi)