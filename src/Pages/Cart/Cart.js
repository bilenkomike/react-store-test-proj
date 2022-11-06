import {Component} from 'react';
import CartList from '../../Components/Cart/CartList';

// css
import classes from './Cart.module.css';

class Cart extends Component {
    

    render() {
        return (
            <div className="content">
                <h1 className={classes.cart__title}>Cart</h1>
                <CartList />
                <div className={classes.cart__total}>
                    <div>Tax 21%: <span className={classes.total__info}>$42.00</span></div>
                    <div>Quantity: <span className={classes.total__info}>3</span></div>
                    <div className={classes.total}>Total: <span className={classes.total__info}>$200.00</span></div>


                    <button className={classes.cart__order__button}>Order</button>
                </div>
            </div>
        );
    }
}


export default Cart;