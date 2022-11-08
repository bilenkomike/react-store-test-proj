import {Component} from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

import classes from './ProductsList.module.css';



class ProductsList extends Component {
    render() {
        const { products, curr } = this.props;
        console.log(this.props);
        return (
            <div className={classes.product__list}>
                {curr !== null && products.map(product => <ProductItem 
                key={product.id}
                prices={product.prices} 
                currency={curr.symbol}
                id={product.id}
                sold={!product.inStock} 
                image={product.gallery[0]}
                brand={product.brand}
                name={product.name}
                attributes={product.attributes}
                />)}
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        curr: state.currencies.selected,
    }
}


export default connect (mapStateToProps,null) (ProductsList);