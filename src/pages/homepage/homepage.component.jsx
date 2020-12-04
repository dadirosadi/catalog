import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import ImageHeader from '../../assets/header.jpg';
import './homepage.styles.scss';

const HomePage = () => (
    <>
        <div className='image-header'>
            <img className='image' alt="header" src={ImageHeader} />
        </div>
        <div className='shop-page'>
            <CollectionsOverview />
        </div>
    </>
);

export default HomePage;
