// Copy by Value or Immutable
// let a = 10
// let b = a
// b = 20
// console.log(a,b)//10 and 20

// For all Primitive data types(number, string, boolean) always copy by value 

//Copy by reference or Mutable
// let obj = {
//     name:"Arun",
//     email:"arun@guvi.com",
//     city:"Chennai"
// }

// let data = obj// shallow copy or mutable or copy by reference
// let details = {...obj} //deep copy or immutable or copy by value {...{name:"Arun",email:"arun@guvi.com",city:"Chennai"}} =>{
//     name:"Arun",
//     email:"arun@guvi.com",
//     city:"Chennai"
// }

// details.name = "Raj"

// data.name = "Abi"
// data.email = "abi@gmail.com"

// console.log(obj)
// console.log(data)
// console.log(details)


// let a = [10,20,30,40,50]
// // let b = a // shallow copy
// let b = [...a] //deep copy

// b.push(100,200)

// console.log(a,b)


// let a = {
//     name:"Arun",
//     email:"arun@guvi.in",
//     mobile:["123","432"],
//     address:{
//         no:13,
//         street:"Raja Street",
//         city:"Coimbatore"
//     }
// }

// let b = {...a}
//deep copy will not work for nested objects like array and json

// ways to acheive deep copy for the nested objects are

// 1. JSON.parse and JSON.stringify

// let b = JSON.parse(JSON.stringify(a))
// b.address.no = 15
// console.log(a)
// console.log(b)


// 2. structuredClone

// let b = structuredClone(a)
// b.address.no = 15
// console.log(a)
// console.log(b)


function displayName(data)
{
    for(let i = 0;i<data.length;i++)
    {
        console.log(data[i].name.common)
    }
}


const req = new XMLHttpRequest()
req.addEventListener("load",(e)=>{
    console.log(e)
    let data = JSON.parse(e.target.responseText)
    displayName(data)
})
req.addEventListener("error",(error)=>{
    console.log(error)
})
req.open("GET","https://restcountries.com/v3.1/all")
req.send()