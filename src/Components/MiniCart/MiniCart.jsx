import {Component} from 'react';
import MiniCartItem from './MiniCartItem';

import classes from './MiniCart.module.css';

import { connect } from 'react-redux';
import { miniCartActions } from '../../store/miniCartSlice/miniCartSlice';

import { Link } from 'react-router-dom';


class MiniCart extends Component {
    render() {
        console.log(this.props.cart);
        return (
            <div className={`${classes.mini__cart} ${this.props.open ? classes.active : ''}`}>
                <h3>My Bag , <span className={classes.mini__cart__items__counter}>{this.props.count} items</span></h3>
                
                {this.props.cart.length > 0 && this.props.cart.map(cartItem => <MiniCartItem {...cartItem} />)}
                <div className={classes.mini__cart__total}>Total: <span>$200.00</span></div>
                <div className={classes.mini__cart__actions}>
                    <Link to="/cart" className={classes.mini__cart__view__btn} onClick={() => {
                        this.props.toggleMiniCart();
                    }}>View bag</Link>
                    <button className={classes.mini__cart__success__btn}>Check out</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        open: state.miniCart.open,
        count: state.cart.count,
        cart: state.cart.items,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleMiniCart: () => dispatch(miniCartActions.toggle()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);