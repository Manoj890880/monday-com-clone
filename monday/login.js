
let data=localStorage.getItem("customerEmail")||[]

function myfun(){
    let email=document.querySelector("#email").value
    console.log(email)
    let customer=''
    let obj={
        customerEmail:email,
        customer
    }
    data.push(obj)
    localStorage.setItem("customerEmail",data)
}