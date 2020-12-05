import React from 'react';
import ImageFooter from '../../assets/footer.jpg';
import './footer.styles.scss';

const FooterPage = (props) => (
    <>
        <div className='footer'>
            <img className='image' alt="header" src={ImageFooter} />
        </div>
    </>
);

export default FooterPage;
