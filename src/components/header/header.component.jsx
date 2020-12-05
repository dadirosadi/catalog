import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                SHOP
            </Link>
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(Header);