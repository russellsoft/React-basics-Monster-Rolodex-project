import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyBHmY_FLsxSmY4xE5hmzghS1vBnWqwPukU",
	authDomain: "crown-clothing-aad95.firebaseapp.com",
	projectId: "crown-clothing-aad95",
	storageBucket: "crown-clothing-aad95.appspot.com",
	messagingSenderId: "16982176332",
	appId: "1:16982176332:web:ac2e86c786b0c2365bfae9"
 };
 
 const firebaseApp = initializeApp(firebaseConfig);

 const provider = new GoogleAuthProvider()
 
 provider.setCustomParameters({
	prompt: 'select_account'
 })

 export const auth = getAuth()
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider)