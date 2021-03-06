import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import ImageHeader from '../../assets/header.jpg';
import './catagory.styles.scss';
const CollectionsCategory = React.lazy(() => import('../../components/collections-category/collections-category.component'));

const CategoryPage = ({ collections, ...props }) => {
    return (
        <>
            <div className='image-header'>
                <img className='image' alt="header" src={ImageHeader} />
            </div>
            <div className='shop-page'>
                <CollectionsCategory collections={collections} {...props} />
            </div>
        </>
    )
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CategoryPage);
