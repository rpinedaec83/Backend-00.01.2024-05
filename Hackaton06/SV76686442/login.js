let loginform = document.getElementById("login-form");

// $("#login-form").addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("Hizo click")
// })

let txtusername = document.getElementById("username");
let txtpassword = document.getElementById("password");
let chbrememberme = document.getElementById("remember-me");

loginform.addEventListener("submit",function login(e){
    e.preventDefault();
    console.log("Hizo click")
    console.log(txtusername.value)
    console.log(txtpassword.value)
    console.log(chbrememberme.checked)
    if(txtusername.value == "mia171001" && txtpassword.value=="123456"){
        console.log("login correcto")
        if(chbrememberme.checked){
            sessionStorage.setItem("login", JSON.stringify({login:true}));
        }
        else{
            sessionStorage.setItem("login", JSON.stringify({login:false}));
        }
        window.location.replace("index.html");
    }

});
