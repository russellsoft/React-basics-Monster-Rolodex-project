import { createContext, useState, useEffect } from "react"

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utilities/firebase/firebase.utils"

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const value = { currentUser, setCurrentUser }

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if ( user ) {
				createUserDocumentFromAuth(user)
			}
			setCurrentUser(user)
		})
	}, [])

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}