import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils"
import { useState } from "react"

import './sign-in-form.styles.scss'

import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"

const defaultFormFields = {
	email: '',
	password: ''
}

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const signInWithGoogle = async () => {
		await signInWithGooglePopup()
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password)

			resetFormFields()
		} catch (error) {
			switch (error.code) {
				case ('auth/wrong-password'):
					alert('Неверный пароль')
					break
				case ('auth/user-not-found'):
					alert('Пользователь под таким Email не зарегистрирован')
					break
				default:
					console.log(error)

			}
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields( { ...formFields, [name]: value } )
	}

	return (
		<div className="sign-in-container">
			<h2>У меня есть аккаунт</h2>
			<span>Войти с помощью email и пароля</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Email'  type="email" onChange={handleChange} name='email' value={email}/>
				<FormInput label='Пароль'  type="password" onChange={handleChange} name='password' value={password} />
				<div className="buttons-container">
					<Button type="submit">Войти</Button>
					<Button type="button" buttonType={'google'} onClick={signInWithGoogle}>Войти с Google</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm