//spread & rest operators
//spread operator convert array or object values to comma separated value
// let a = [1,2,3,4,5]
// let b = [...a]
// console.log(a,b)

// function sum(a,b,c)
// {
//     console.log(a,b,c)
//     return a + b +c
// }
// //          a   b   c
// let array = [10,20,30,40,50]

// console.log(sum(array[0],array[1],array[2]))
// console.log(sum(...array))

// let person = {
//         name:"Naga",
//         email:"nag@gmail.com"
//     }

//We can not use spread operator to spread an object to function
// let person1 = {...person}//this will work

// function details(name,email){
//     console.log("The email "+email+" belongs to "+name)
// }

// let person = {
//     name:"Naga",
//     email:"nag@gmail.com"
// }
// details(...person)// this will not work

// function details(person)
// {
//     console.log(person["name"],person["email"])
//     console.log(person.name,person.email)
// }

// let person = {
//     name:"Naga",
//     email:"nag@gmail.com"
// }
// details(person)

// Rest operator
// convert the comma separated values to array in the function
// example where rest is used is console.log()

// function nInputs(...input)
// {
//     console.log(input)
// }

// nInputs(10,20,30,"Welcome","Hello")



//Array Destructure
// let marks = [9,8,10,7,9]

// let english = marks[0]
// let tamil = marks[1]
// let maths = marks[2]
// let science = marks[3]
// let social = marks[4]

// let [english,tamil,maths,science,social] = marks

// console.log(english,tamil,maths,science,social)

// let latlng = [35,40]
// let [lat,lng] = latlng


//Object Destructure

// let person = {
//     name:"Naga",
//     email:"nag@gmail.com",
//     address:{
//         no:"13",
//         street:"RR Street",
//         city:"Chennai"
//     }
// }

// let {name,email} = person

// console.log(name,email)

// let {address} = person
// let {no,street} = address

// let {no,street} = person.address
// console.log(no,street)


//Object Shorthand
// let name = "Naga"
// let email = "naga@gmail.com"

// let details = {
//     name:name,
//     email:email
// }

// let details = {
//     "name":"naga",
//     "email":"naga@gmail.com"
// }

// let details = {
//     name,
//     email
// }
// console.log(details)

//Template literals

// let name = "naga"
// let email = "nag@gmail.com"
// console.log("The email "+email+" belongs to "+name)
// console.log(`The email ${email} belongs to ${name}`)


let details = [
    {
        name:"naga",
        email:"naga@gmail.com"
    },
    {
        name:"Arun",
        email:"arun@gmail.com"
    },
    {
        name:"Venky",
        email:"venky@gmail.com"
    }
]

details.forEach((e)=>{
    console.log(`The registered user is ${e.name} with email ${e.email}`)
    // console.log("The registered user is "+e.name+" with email "+e.email)   
})