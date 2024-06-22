const   API_URL = 'https://66371215288fedf6937f559e.mockapi.io/users'
let myForm = document.forms["createForm"]

myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    try {
        let data = {
            name: myForm.name.value,
            email:myForm.email.value,
            mobile:myForm.mobile.value,
            gender:myForm.gender.value,
            dob:myForm.dob.value,
            address:{
                addressLine:myForm.addressLine.value,
                city:myForm.city.value,
                state:myForm.state.value,
                zipcode:myForm.zipcode.value
            }
        }
        let res = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        if(res.status===201)
        {
            window.location.href = '/'
        }
    } catch (error) {
        
    }
})