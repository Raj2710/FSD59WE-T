let root = document.getElementById("root")
// console.log(root.innerText)

// root.innerText = "<h1>This is changed Text</h1>"

// root.innerHTML = "<h1>This is changed Text</h1>"

// let h1 = document.createElement("h1")
// h1.innerText = "This is changed Text"

// root.appendChild("Text")

let topWebsites = [
    {
        siteName:"Google",
        siteUrl:"https://www.google.co.in/"
    },
    {
        siteName:"Facebook",
        siteUrl:"https://www.facebook.com/"
    },
    {
        siteName:"Instagram",
        siteUrl:"https://www.instagram.com/"
    },
    {
        siteName:"Guvi",
        siteUrl:"https://www.guvi.in/"
    }
]

function getListElement(e){
    let li = document.createElement("li")
    
    let a = document.createElement("a")
    a.setAttribute('href',e.siteUrl)
    a.setAttribute('target','_blank')
    a.setAttribute('class','link')
    a.innerText = e.siteName
    li.appendChild(a)

    return li
}

let h2 = document.createElement("h2")
h2.innerText = "The Top visited websites are:"
root.appendChild(h2)

let ul = document.createElement("ul")

topWebsites.forEach((e)=>{
    let li = getListElement(e)
    ul.appendChild(li)
})

root.appendChild(ul)


// let elements = document.getElementsByClassName("link")
// console.log(elements[0])

let elements = document.querySelectorAll(".link")
console.log(elements)
for(let i =0;i<elements.length;i++)
{
    elements[i].setAttribute('style',"color:blue")
}

// let elements = document.querySelector("#root")
// let elements = document.querySelectorAll(".link")
// console.log(elements)

// let elements = document.querySelectorAll("div")
// console.log(elements)