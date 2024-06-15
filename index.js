// Promise
//State
// 1. pending
// 2. resolved or fulfilled
// 3. rejected

// let Promise1 = new Promise((resolve,reject)=>{
//     reject("promise 1 is resolved")
// })

// let Promise2 = new Promise((resolve,reject)=>{
//     resolve("promise 2 is resolved")
// })

// let Promise3 = new Promise((resolve,reject)=>{
//     resolve("promise 3 is resolved")
// })

//promise chain
// Promise3
// .then((value)=>`${value} step 1`)
// .then((value)=>`${value} step 2`)
// .then((value)=>`${value} step 3`)
// .then((value)=>console.log(value))  
// .catch((error)=>console.error(error)) 

// Promise1
// .then((value)=>console.log(value))
// .catch((error)=>console.error(error))
// .finally(()=>console.log("Finally Block Executed"))

// Promise2
// .then((value)=>console.log(value))
// .catch((error)=>console.error(error))


// let Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 is resolved")
//     },3000)
// })

// let Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 2 is resolved")
//     },1000)
// })

// let Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 3 is resolved")
//     },0)
// })

// let Promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 4 is resolved")
//     },0)
// })

// let Promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 5 is resolved")
//     },3000)
// })


//Promise.all
//Promise.all fulfills when all promise fulfills

// Promise.all([Promise1,Promise2,Promise3,Promise4,Promise5])
// .then(value=>console.log(value))
// .catch((error)=>console.error(error))


//Promise.any
// fulfills when any of the input's promises fulfills, with this first fulfillment value

// Promise.any([Promise1,Promise2,Promise3,Promise4,Promise5])
// .then(value=>console.log(value))
// .catch((error)=>console.error(error))

// Promise.allSettled
//fullfills and return the result of all the promise once all are fullfilled

// Promise.allSettled([Promise1,Promise2,Promise3,Promise4,Promise5])
// .then(value=>console.log(value))
// .catch((error)=>console.error(error))


// Promise.race([Promise1,Promise2,Promise4,Promise3,Promise5])
// .then(value=>console.log(value))
// .catch((error)=>console.error(error))

let div = document.getElementById("root")

const construct = (data)=>{
    data.forEach((e)=>{
        let cardWrapper = document.createElement("div")
        cardWrapper.setAttribute('class',"card-wrapper")
        cardWrapper.innerHTML = `<img src="${e.flags.svg}" alt="${e.name.common}" class="card-image">
                <div class="card-content">
                    <h3>${e.name.common}</h3>
                    <h4>${e.capital?e.capital[0]:"-"}</h4>
                </div>`
        div.appendChild(cardWrapper)

    })
}


fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>construct(data))
.catch((err)=>console.error(err))