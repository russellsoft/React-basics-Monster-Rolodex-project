import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import './navigation.styles.scss'
import { ReactComponent as CapLogo } from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context'
import { signUserOut } from '../../utilities/firebase/firebase.utils'
import CartIcon  from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {

	const { currentUser } = useContext(UserContext)

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

					{currentUser ? (<span className='nav-link' onClick={signUserOut}>ВЫЙТИ</span>) : (<Link className='nav-link' to='/auth'>ВОЙТИ</Link>)}

					<CartIcon />
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation