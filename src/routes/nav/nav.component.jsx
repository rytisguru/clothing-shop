import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import CartIcon from './../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from './../../context/cart.context';

import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import './nav.styles.scss';

const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <div className='navigation'>
                <Link className="logo-container" to="/">
                    <CrownLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser
                        ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">SIGN IN</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen &&
                    <CartDropDown />
                }
            </div>
            <Outlet />
        </>
    )
}

export default Nav;