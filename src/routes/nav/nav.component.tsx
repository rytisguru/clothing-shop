import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { Outlet, Link } from 'react-router-dom';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import {
    Navigation,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './nav.styles';

const Nav = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const dispatch = useDispatch()

    const logOut = () => dispatch(signOutStart())

    return (
        <>
            <Navigation>
                <LogoContainer to="/">
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser
                        ? (
                            <span className="nav-link" onClick={logOut}>SIGN OUT</span>
                        ) : (
                            <NavLink to="/auth">SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen &&
                    <CartDropDown />
                }
            </Navigation>
            <Outlet />
        </>
    )
}

export default Nav;