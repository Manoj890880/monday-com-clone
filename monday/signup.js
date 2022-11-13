
let EmailData=JSON.parse(localStorage.getItem("customerEmail"))||[]
console.log(EmailData)

let data=JSON.parse(localStorage.getItem("customerEmail"))||[]

function myfun(){
    let email=document.querySelector("#email").value
    if(emailMatch(email)){
        alert("You already have an account")
        window.location.href="login.html"
    }
    else{
    data.push(email)
    localStorage.setItem("customerEmail",JSON.stringify(data))
    window.location.href="setup.html"
    }
}
function emailMatch(email){
    for(let i=0;i<EmailData.length;i++){
        if(EmailData[i]==email){
            return true;
        }
    }
    return false;
}