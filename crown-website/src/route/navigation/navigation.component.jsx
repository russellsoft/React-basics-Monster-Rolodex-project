import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import './navigation.styles.scss'
import { ReactComponent as CapLogo } from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context'
import { signUserOut } from '../../utilities/firebase/firebase.utils'

const Navigation = () => {

	const {  currentUser, setCurrentUser } = useContext(UserContext)

	const signOutHandler = async () => {
		await signUserOut()
		setCurrentUser(null)
	}

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CapLogo className='logo' />
				</Link>
				<div className="nav-links-container">
					<Link className='nav-link' to='/shop'>
						КАТАЛОГ
					</Link>
					{currentUser ? (<span className='nav-link' onClick={signOutHandler}>ВЫЙТИ</span>) : (<Link className='nav-link' to='/auth'>ВОЙТИ</Link>)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation