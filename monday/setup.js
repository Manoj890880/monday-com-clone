


let data=JSON.parse(localStorage.getItem("customer-details"))||[]

function myfun(){
    let fullName=document.querySelector("#fullName").value
    let password=document.querySelector("#password").value
    let accountName=document.querySelector("#accountName").value
    let obj={
        fullName,
        password,
        accountName
    }
    if(fullName==""||password==""||accountName==""){
        alert("Please fill all the details")
    }else{
    data.push(obj)
    localStorage.setItem("customer-details",JSON.stringify(data))
    alert("Account has been created you are redirected to Home page")
    window.location.href="index.html"
    }
}