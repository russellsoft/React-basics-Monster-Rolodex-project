import { signInWithGooglePopup } from "../../utilities/firebase/firebase.utils"

const SignIn = () => {
	const authGoogle = async () => {
		const response = await signInWithGooglePopup()
		console.log(response)
	}

	return (
		<div>
			<h1>Sign in</h1>
			<button onClick={authGoogle}>Click</button>
		</div>
	)
}

export default SignIn