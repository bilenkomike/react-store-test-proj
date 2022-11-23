import { Component } from "react";
import MiniCartItem from "./MiniCartItem";

import classes from "./MiniCart.module.css";

import { connect } from "react-redux";
import { miniCartActions } from "../../store/miniCartSlice/miniCartSlice";

import { Link } from "react-router-dom";
import { productsActions } from "../../store/productsSlice/productsSlice";

class MiniCart extends Component {
  state = {
    cartObjs: [],
  };
  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      let ids = [];
      this.props.cart.map((item) => {
        ids.push(item.id);
        return ids;
      });

      this.props.getProductsForCart(ids);
    }
  }
  componentDidMount() {
    if (this.props.cart.length > 0) {
      let ids = [];
      this.props.cart.map((item) => {
        ids.push(item.id);
        return ids;
      });

      this.props.getProductsForCart(ids);
    }
  }
  render() {
    return (
      <div
        className={`${classes.mini__cart} ${
          this.props.open ? classes.active : ""
        }`}
      >
        <h3>
          My Bag ,
          <span className={classes.mini__cart__items__counter}>
            {this.props.count} items
          </span>
        </h3>

        <div className={classes.mini__cart__inner}>
          {this.props.cart.length > 0 &&
            this.props.cart.map((cartItem) => (
              <MiniCartItem
                key={cartItem.id + Math.random().toString()}
                {...cartItem}
                product={this.props.productsForCart.find(
                  (item) => item.id === cartItem.id
                )}
              />
            ))}
        </div>
        {this.props.currency !== null && (
          <div className={classes.mini__cart__total}>
            Total:
            <span>
              {this.props.currency.symbol}
              {this.props.total[this.props.currency.symbol] === undefined &&
                "0.00"}
              {this.props.total[this.props.currency.symbol] !== undefined &&
                this.props.total[this.props.currency.symbol].toFixed(2)}
            </span>
          </div>
        )}
        <div className={classes.mini__cart__actions}>
          <Link
            to="/cart"
            className={classes.mini__cart__view__btn}
            onClick={() => {
              this.props.toggleMiniCart();
            }}
          >
            View bag
          </Link>
          <button className={classes.mini__cart__success__btn}>
            Check out
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencies.selected,
    open: state.miniCart.open,
    count: state.cart.count,
    cart: state.cart.items,
    total: state.cart.total,
    productsForCart: state.products.cartProds,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMiniCart: () => dispatch(miniCartActions.toggle()),
    getProductsForCart: (ids) =>
      dispatch(productsActions.getProductsForCart(ids)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
