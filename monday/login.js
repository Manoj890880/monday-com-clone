let customerEmail_arr=JSON.parse(localStorage.getItem("customerEmail"))
console.log(customerEmail_arr)



function myfun(){
    let email=document.querySelector("#email").value
    if(customerEmail_arr.includes(email)){
        window.location.href="login2.html"
    }
    else{
        alert("Please enter correct email")
    }
}



