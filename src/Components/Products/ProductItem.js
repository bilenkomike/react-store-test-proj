import {Component} from 'react';

import classes from './ProductItem.module.css';
import cart from './images/cart.png';

class ProductItem extends Component {

    state = {
        disabled: false
    };


    render() {
        return (
            <div className={`${classes.product__item} ${this.props.sold ? classes.sold : ''}`}>
                <div className={classes.product__hover__card}>
                    <div className={classes.product__hover__card__text}>Out of Stock</div>
                </div>
                <div className={classes.product__image}>
                    <img className={classes.product__img} src="https://via.placeholder.com/354x330" alt="" />
                    <button className={classes.product__cart__button}>
                        <img src={cart} alt="" />
                    </button>
                </div>
                
                <div className={classes.product__info}>
                    <h2 className={classes.product__title}>Apollo Running Short</h2>
                    <div className={classes.product__value}>$50.00</div>
                </div>
            </div>
        );
    }
}

export default ProductItem;