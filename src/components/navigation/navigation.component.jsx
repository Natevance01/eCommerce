import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context.jsx'
import { CartContext } from '../../context/cart.context.jsx'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import './navigation.styles.scss'
import CardDropdown from '../cart-dropdown/cart-dropdown.component.jsx'


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const Navigation = () => {

  const { currentUser} = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>Sign Out</span>
              ) : (
                <Link className='nav-link' to='/auth'>
                    Sign In
                </Link>
              )
            }
          <CartIcon />
        </div>
        { isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
