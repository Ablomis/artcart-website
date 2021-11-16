import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

signInButton.addEventListener('click', signIn)
signInError.style.display = "none";

function signIn(){
    const auth = getAuth();
    signInError.style.display = "none";
    var email = signInEmail.value;
    var password = signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace('./account-center');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        signInError.innerText = errorMessage;
        signInError.style.display = "block";
        // ..
      });
}