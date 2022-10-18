import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from './../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './nav.styles.scss';

const Nav = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <div className='navigation'>
                <Link className="logo-container" to="/">
                    <CrownLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to="/auth">SIGN IN</Link>
                    )
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav;