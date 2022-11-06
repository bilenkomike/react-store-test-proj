import {Component} from 'react';
import ProductItem from './ProductItem';

import classes from './ProductsList.module.css';

class ProductsList extends Component {
    render() {
        return (
            <div className={classes.product__list}>
                <ProductItem />
                <ProductItem />
                <ProductItem sold={true} />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        );
    }
}

export default ProductsList;