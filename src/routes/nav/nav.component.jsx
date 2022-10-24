import { useSelector, useDispatch } from 'react-redux';
import { selectCurrenUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from './../../store/cart/cart.selector';

import CartIcon from './../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import './nav.styles.scss';

const Nav = () => {
    const currentUser = useSelector(selectCurrenUser)
    const isCartOpen = useSelector(selectIsCartOpen)

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