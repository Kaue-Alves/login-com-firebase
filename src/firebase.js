import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDTVgkFitlKbzyPnMSZHHwHk9fiP1iKvPs",
authDomain: "login-com-firebase-7f3af.firebaseapp.com",
projectId: "login-com-firebase-7f3af",
storageBucket: "login-com-firebase-7f3af.appspot.com",
messagingSenderId: "949263278669",
appId: "1:949263278669:web:2729dd103fb249a0b33204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
auth.languageCode = 'en'
const provider = new GoogleAuthProvider()
const user = auth.currentUser

const googleLogin = document.getElementById("bttLoginGoogle")
googleLogin.addEventListener("click", function(e){
    e.preventDefault()

    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "../logado.html"
        

  }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

  });

})