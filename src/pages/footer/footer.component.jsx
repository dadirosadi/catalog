import React from 'react';
import ImageFooter from '../../assets/footer.jpg';
import './footer.styles.scss';

const FooterPage = () => (
    <div className='footer'>
        <div>
            <h2 className="name" >Dadi Rosadi</h2>
            <h3 className="name">copyright@dadirosadi117</h3>
            <p className="desc">Never regret a day in your life, good days give happiness, bad days give experiences, worst day give lessons, and best day give memories</p>
        </div>
        <div>
            <img className="image" src={ImageFooter} alt="footer" />
        </div>

    </div >
);

export default FooterPage;
