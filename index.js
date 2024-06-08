let h1 = document.createElement("h1")
h1.innerText = "Welcome to DOM Day 2"
document.body.appendChild(h1)


let page;

function openTab(){
    page = window.open('sample.html')
    // page.document.write("<h2>I am the opened Tab</h2>")
}

function closeTab(){
    page.close()
}

function confirmSubmission(){
    let response = confirm("Are you sure? Want to Submit?")
    if(response)
    {
        window.open('https://www.fb.com')
    }
    else
    {
       let age =  window.prompt("Enter your age") 
       console.log(age)
    }
}


function createAdd(){
    let div = document.createElement("div")
    div.setAttribute('id','offer')
    div.innerHTML = `<h1>Grab this offer now! Coupon Code:FREE100</h1>`
    document.body.appendChild(div)
}


setTimeout(()=>{
    createAdd()
},5000)


setTimeout(()=>{
    let div = document.getElementById('offer')
    div.remove()
},10000)

let count = 0
let h = 0
let m = 20
let s = 10

setInterval(()=>{
    s--
    if(s===0)
    {
        m--
        s=59
    }

    let timer = document.getElementById('timer')
    timer.innerHTML = `Offer Ends in 00<sub>HH</sub> : ${m}<sub>MM</sub> : ${s}<sub>SS</sub>`
},1000)