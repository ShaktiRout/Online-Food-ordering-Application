/*----------on closing login form-------------*/ 
// const crossEl = document.getElementById("cross");
// crossEl.addEventListener("click", () =>{
//     window.location.href='index.html';
// })

/*---------submit form-------------*/ 

const form = document.getElementById('loginform');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

/*---------validate input-------------*/ 
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Enter Username');
    } else {
        setSuccess(username);
    }

    
    // if(passwordValue === '') {
    //     setError(password, 'Enter Password');
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    // } else {
    //     setSuccess(password);
    // }    

};



// formEl.addEventListener("submit", e =>{
//     e.preventDefault();
//     formValidate();
// })
//  const formValidate(){
//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();

//     if (username === "user" && password === "password") {
//         alert("You have successfully logged in.");
//         // location.reload();
//     } else {
//         // loginErrorMsg.style.opacity = 1;
//         alert("not logged in");
//     }

// }


// function validate()
// {
//     var userName = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//    if(userName === "admin" && password === "password")
//    {
//     alert("login successful");
//     location.reload();
//    }
//    else
//    {
//     alert("login fail");
//    }

// }












const signupBtnEl = document.getElementById("signupbtn");
signupBtnEl.addEventListener("click", () =>{
    window.location.href='register.html';
})