import {Component} from 'react';

import CartItem from './CartItem';
import classes from './CartItem.module.css';

class CartList extends Component {


    render() {
        return (
            <>
            <hr className={classes.cart__line} />
            <CartItem />
            <CartItem />
            
            </>
        );
    }
}

export default CartList;