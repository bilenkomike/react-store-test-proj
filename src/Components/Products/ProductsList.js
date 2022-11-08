import {Component} from 'react';
import ProductItem from './ProductItem';

import classes from './ProductsList.module.css';

class ProductsList extends Component {
    render() {
        const { products } = this.props;
        return (
            <div className={classes.product__list}>
                {products.map(product => <ProductItem 
                key={product.id}
                id={product.id}
                sold={!product.inStock} 
                image={product.gallery[0]}
                brand={product.brand}
                name={product.name}
                />)}
            </div>
        );
    }

}

export default ProductsList;