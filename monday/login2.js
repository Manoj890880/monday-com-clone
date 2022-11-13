
let customerDetails=JSON.parse(localStorage.getItem("customer-details"))||[]
console.log(customerDetails)
function myfun(){
    let password=document.querySelector("#password").value
    if(match(password)){
        alert("Log in successful you are redirected to home page")
        window.location.href="index.html"
    }else{
        alert("Wrong Password Please Enter correct password")
    }

}
function match(password){
    for(let i=0;i<customerDetails.length;i++){
        if(customerDetails[i].password.includes(password)){
            return true
        }
    }
    return false
}