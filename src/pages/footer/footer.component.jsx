import React from 'react';
import ImageFooter from '../../assets/footer.png';
import './footer.styles.scss';

const FooterPage = () => (
    <div className='footer'>
        <img className='image' alt="header" src={ImageFooter} />
    </div>
);

export default FooterPage;
