import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import logorr from '../Nav/logorr.png';

const Nav = () => (
    <div className='nav'>
        <Link className='logo-container' to='/'>
          <img src={logorr} alt=''/>
        </Link>
      <div className='option'>
        <Link className='option1' to='/shop'>
          SHOP
        </Link>
        <Link className='option1' to='/shop'>
          CONTACT
        </Link>
        <Link className='option1' to='/sign'>
          SIGN IN
        </Link>
        <Link className='option1' to=''>
        <FontAwesomeIcon icon={faShoppingBag} spin size='2x' color="red"/>
        </Link>
      </div>
    </div>

);

export default Nav;