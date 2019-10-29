import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-conatiner' exact='true' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' exact='true' to='/shop' >
                SHOP
            </Link>
            <Link className='option' exact='true' to='/contact' >
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                (<Link className='option' to='/signin'>SIGN IN</Link>)
                )
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
