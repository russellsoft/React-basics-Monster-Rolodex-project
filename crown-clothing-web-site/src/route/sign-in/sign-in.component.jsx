import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {
	const authGoogle = async () => {
		const {user} = await signInWithGooglePopup()
		console.log(user)
		const userDocRef = createUserDocumentFromAuth(user)
	}

	return (
		<div>
			<h1>Sign in</h1>
			<button onClick={authGoogle}>Click</button>
			<SignUpForm/>
		</div>
	)
}

export default SignIn