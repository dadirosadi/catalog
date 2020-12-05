import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRelatedProduct, selectDetailProduct } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../../components/custom-button/custom-button.component';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './detail-product.styles.scss';

const ProductDetailPage = ({ relatedProduct, productDetail, addItem, ...props }) => {
    console.log("DETAIL PRODUCT ", productDetail);
    return (

        <div className='collections-overview'>
            <div className="detail">
                <div className="image-container">
                    <img src={productDetail.imageUrl} className="image" alt="product" />
                </div>
                <div className="information">
                    <h5>
                        Home / {relatedProduct[0].title}
                    </h5>
                    <h1>{productDetail.name}</h1>
                    <h1>${productDetail.price}</h1>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.</p>
                    <CustomButton onClick={() => addItem(productDetail)} inverted>
                        Add to cart
                     </CustomButton>
                </div>

            </div>
            <div className='info'>
                <h3>Related Product</h3>
                <h3 className='more' onClick={() => { props.history.push(`/${relatedProduct[0].title.toLowerCase()}`) }}>See More</h3>
            </div>

            {
                relatedProduct.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview notShow={true} key={id} {...otherCollectionProps} {...props} />
                ))
            }

        </div >
    )
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

const mapStateToProps = createStructuredSelector({
    relatedProduct: selectRelatedProduct,
    productDetail: selectDetailProduct
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);