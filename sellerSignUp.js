import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

signUpButton.addEventListener('click', signUp)
signUpError.style.display = "none";

function signUp(){
    const auth = getAuth();
    signUpError.style.display = "none";
    var email = signUpEmail.value;
    var password = signUpPassword.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace('./seller/account-center');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        signUpError.innerText = errorMessage;
        signUpError.style.display = "block";
        // ..
      });
}