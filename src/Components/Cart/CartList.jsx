import { Component } from "react";

import CartItem from "./CartItem";
import classes from "./CartItem.module.css";

import { connect } from "react-redux";

class CartList extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <>
        <hr className={classes.cart__line} />
        {this.props.cart &&
          this.props.cart.map((cartItem) => (
            <CartItem
              currency={this.props.currency}
              key={cartItem.id + Math.random().toString()}
              {...cartItem}
              product={this.props.productsForCart.find(
                (item) => item.id === cartItem.id
              )}
            />
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsForCart: state.products.cartProds,
    cart: state.cart.items,
    currency: state.currencies.selected,
  };
};

export default connect(mapStateToProps, null)(CartList);
