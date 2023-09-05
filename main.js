function login(){
    const studentNumber = document.getElementById("student").value;
    const password = document.getElementById("password").value;


    if(studentNumber === "S02-0002" && password === "2002-02-20"){
        window.location.href = "inside.html";
        const studentNumber = document.getElementById("student").value = "";
        const password = document.getElementById("password").value = "";
    }else{
        alert("Invalid credentials. Please try again");
        const studentNumber = document.getElementById("student").value = "";
        const password = document.getElementById("password").value = "";
    } 
}

function showPassword(){
    var passwordInput = document.getElementById("password");
    var icon = document.getElementById("icon");


    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        icon.src = "img/view.png";
        icon.style.opacity = "0.5";
    }else{
        passwordInput.type = "password";
        icon.src = "img/hide.png";
        icon.style.opacity = "0.5";
    }
}