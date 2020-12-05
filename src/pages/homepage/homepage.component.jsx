import React from 'react';
import ImageHeader from '../../assets/header.jpg';
import './homepage.styles.scss';
const CollectionsOverview = React.lazy(() => import('../../components/collections-overview/collections-overview.component'));


const HomePage = (props) => (
    <>
        <div className='image-header'>
            <img className='image' alt="header" src={ImageHeader} />
        </div>
        <div className='shop-page'>
            <CollectionsOverview {...props} />
        </div>
    </>
);

export default HomePage;
