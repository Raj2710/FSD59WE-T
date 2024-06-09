// let a = [1,2,3,4,5]

// callback function is a function which is passed as a parameter to other function
// a.forEach((e,i)=>{
//     console.log(i,e)
// })

// let filteredData = a.filter((e)=>e%2===0)
// console.log(filteredData)

// function sum(a,b)
// {
//     return a + b
// }

// function display(result)
// {
//     console.log(`The result is ${result}`)
// }

// function add(a,b,sum,display)
// {
//    let result = sum(a,b)
//     display(result)
//     display("Nagarajan")
// }

// add(5,10,sum,display)

// console.log(sum(10,5))

// display("Guvi")

// let a = [1,2,3,4,5]


// function forEach(array,callback)
// {
//     for(let i=0;i<array.length;i++)
//     {
//         callback(array[i],i)
//     }
// }

// forEach(a,(e,index)=>{
//     console.log(index,e)
// })

// function filter(array,callback)
// {
//     let newArray = []
//     for(let i=0;i<array.length;i++)
//     {
//         if(callback(array[i],i))
//             newArray.push(array[i])
//     }
//     return newArray
// }

// function map(array,callback)
// {
//     let newArray = []
//     for(let i=0;i<array.length;i++)
//     {
//         newArray.push(callback(array[i],i))
//     }
//     return newArray
// }

// let filteredData = filter(a,(e)=>e%2===0)
// console.log(filteredData)

// let data = map(a,(e,i)=>{
//     return `The index ${i} has value ${e}`
// })

// console.log(data)

// console.log(a.map((e)=>{
//     return `The index ${i} has value ${e}`
// }))

// setTimeout(()=>{
//     console.log("Timeout 1")
// },1)

// setTimeout(()=>{
//     console.log("Timeout 2")
// },0)


// setTimeout(()=>{
//     console.log("Timeout 3")
// })

//Callback Hell

// setTimeout(()=>{
//     console.log("Timeout 1")
//     let div = document.getElementById('root')
//     div.innerHTML = `<h1>10</h1>`
//     setTimeout(()=>{
//         console.log("Timeout 2")
//         setTimeout(()=>{
//             console.log("Timeout 3")
//             setTimeout(()=>{
//                 console.log("Timeout 4")
//                 setTimeout(()=>{
//                     console.log("Timeout 5")
//                     setTimeout(()=>{
//                         console.log("Timeout 6")
//                         setTimeout(()=>{
//                             console.log("Timeout 7")
//                             setTimeout(()=>{
//                                 console.log("Timeout 8")
//                                 setTimeout(()=>{
//                                     console.log("Timeout 9")
//                                     setTimeout(()=>{
//                                         console.log("Timeout 10")
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)   
// },1000)


//Task

let div = document.getElementById('root')
let n = 11
function setData(n)
{
    div.innerHTML = `<h1>${n}</h1>` 
}

setTimeout(()=>{
    setData(--n)
    setTimeout(()=>{
        setData(--n)
        setTimeout(()=>{
            setData(--n)
            setTimeout(()=>{
                setData(--n)
                setTimeout(()=>{
                    setData(--n)
                    setTimeout(()=>{
                        setData(--n)
                        setTimeout(()=>{
                            setData(--n)
                            setTimeout(()=>{
                                setData(--n)
                                setTimeout(()=>{
                                    setData(--n)
                                    setTimeout(()=>{
                                        setData(--n)
                                        setTimeout(()=>{
                                            setData("Happy Independence Day")
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)