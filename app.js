
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { 
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
 
    GoogleAuthProvider,
 
  }from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxP4WtUSGlktkIx244zAIEIn618VH5ZeM",
    authDomain: "my-first-project-cb097.firebaseapp.com",
    projectId: "my-first-project-cb097",
    storageBucket: "my-first-project-cb097.firebasestorage.app",
    messagingSenderId: "535992580099",
    appId: "1:535992580099:web:3960453cecc5edefbbb636",
    measurementId: "G-LKG2FW37QM"
  };

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);

 const signup_email = document.getElementById(`signup_email`)
 const signup_password = document.getElementById(`signup_password`)
 const  signup_btn = document.getElementById(`signup_btn`)


 const signin_email = document.getElementById(`signin_email`)
 const signin_password = document.getElementById(`signin_password`)
 const  signin_btn = document.getElementById(`signin_btn`)

 const  user_email = document.getElementById(`user_email`)
 const  logout_btn = document.getElementById(`logout_btn`)


 const auth_container = document.getElementById(`auth_container`)
 const user_container = document.getElementById(`user_container`)
 const googleLoginButton = document.getElementById("googleLoginButton");


signup_btn.addEventListener("click", craetuserAccount);
signin_btn.addEventListener(`click`, signIn);
logout_btn.addEventListener(`click`, logout);

 onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is loged in")
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    // ...
  } else {
    console.log("user is not loged in==>") 
    auth_container.style.display = "block";
    user_container.style.display = "none";

    // User is signed out
    // ...
  }
});


function craetuserAccount(){
  // console.log("email=>", signup_email.value);
  // console.log("password=>", signup_password.value); 
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}

function signIn(){
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(`user`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}




googleLoginButton.addEventListener("click", () => {
  signInWithPopup(auth, provider)
      .then(() => Swal.fire("Success", "Logged in with Google!", "success"))
      .catch((err) => Swal.fire("Error", err.message, "error"));
});











// // Login Button Click Event
// document.getElementById('signin_btn').addEventListener('click', function () {
//   const email = document.getElementById('signin_email').value.trim();
//   const password = document.getElementById('signin_password').value.trim();

//   if (!email || !password) {
//     // SweetAlert if fields are empty
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'Please fill in both email and password to log in.',
//       confirmButtonText: 'Okay'
//     });
//   } else {
//     // Proceed with login logic here
//     console.log('Logging in with:', email, password);
//   }
// });
