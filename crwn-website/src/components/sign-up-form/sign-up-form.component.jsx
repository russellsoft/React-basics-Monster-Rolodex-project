import { useState } from "react"

import './sign-up-form-styles.scss'

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
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

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('passwords do not match')
			return
		} 

		try {
			const {user} = await createAuthUserWithEmailAndPassword(email, password)
			await createUserDocumentFromAuth(user, {displayName})

			resetFormFields()
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Не можем создать пользователя, эта электронная почта уже используется')
			} 
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields( { ...formFields, [name]: value } )
	}

	return (
		<div className="sign-up-container">
			<h2>У меня нет аккаунта</h2>
			<span>Создать профиль</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Имя' type='text' required onChange={handleChange} name="displayName" value={displayName} />
				<FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />
				<FormInput label='Пароль'  type='password' required onChange={handleChange} name="password" value={password} />
				<FormInput label='Подтвердить пароль'  type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
				<Button type="submit">Подтвердить</Button>
			</form>
		</div>
	)
}

export default SignUpForm