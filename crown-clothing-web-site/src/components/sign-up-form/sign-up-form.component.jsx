import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils"

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields

	console.log(formFields)

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('passwords do not match')
			return
		} 

		try {
			const {user} = await createAuthUserWithEmailAndPassword(email, password)
			await createUserDocumentFromAuth(user, {displayName})
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields( { ...formFields, [name]: value } )
	}

	return (
		<div>
			<h1>Создайте профиль</h1>
			<form onSubmit={handleSubmit}>
				<label>Display name</label>
				<input type='text' required onChange={handleChange} name="displayName" value={displayName} />

				<label>Email</label>
				<input type='email' required onChange={handleChange} name="email" value={email} />

				<label>Password</label>
				<input type='password' required onChange={handleChange} name="password" value={password} />

				<label>Confirm password</label>
				<input type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
				<button type="submit">Подтвердить</button>
			</form>
		</div>
	)
}

export default SignUpForm