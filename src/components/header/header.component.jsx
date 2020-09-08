import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'> SHOP </Link>
      <Link className='option' to='/contact'> CONTACT </Link>
      <Link className='option' to='/signin'> SIGN IN </Link>
      <CartIcon />
    </div>
  </div>
);

export default Header;