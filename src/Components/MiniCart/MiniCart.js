import {Component} from 'react';
import MiniCartItem from './MiniCartItem';

import classes from './MiniCart.module.css';

class MiniCart extends Component {
    render() {
        return (
            <div className={`${classes.mini__cart} ${this.props.active ? classes.active : ''}`}>
                <h3>My Bag , <span className={classes.mini__cart__items__counter}>3 items</span></h3>
                <MiniCartItem />
                <MiniCartItem />

                <div className={classes.mini__cart__total}>Total: <span>$200.00</span></div>
                <div className={classes.mini__cart__actions}>
                    <button className={classes.mini__cart__view__btn}>View bag</button>
                    <button className={classes.mini__cart__success__btn}>Check out</button>
                </div>
            </div>
        );
    }
}


export default MiniCart;