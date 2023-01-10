import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {	getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';

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

 export const db = getFirestore()

 export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName, email, createdAt, ...additionalInfo
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
		return userDocRef
	}
 }

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
 
	return await signInWithEmailAndPassword(auth, email, password);
 }

 export const signUserOut = async () => {	signOut(auth) }

 export const onAuthStateChangedListener = (callback) => 
 	onAuthStateChanged(auth, callback)