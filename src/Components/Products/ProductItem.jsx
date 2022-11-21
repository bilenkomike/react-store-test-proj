import { Component } from "react";

import classes from "./ProductItem.module.css";
import cart from "./images/cart.png";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cartActions } from "../../store/cartSlice/cartSlice";

class ProductItem extends Component {
  state = {
    disabled: false,
  };

  render() {
    const price = this.props.prices.find(
      (price) => price.currency.symbol === this.props.currency
    );
    // console.log(this.props);
    return (
      <div className={`${classes.product__item}`}>
        <div className={classes.product__hover__card}>
          <div className={classes.product__hover__card__text}>Out of Stock</div>
        </div>
        <div className={classes.product__image}>
          <Link to={`/product/${this.props.id}`}>
            <img
              className={classes.product__img}
              src={this.props.image}
              alt=""
            />
          </Link>
          {!this.props.sold && (
            <button
              className={classes.product__cart__button}
              onClick={() => {
                console.log(this.props);
                this.props.addProduct({
                  id: this.props.id,
                  prices: this.props.prices,
                  attributes: this.props.attributes,
                });
                // id, prices, attributes
              }}
            >
              <img src={cart} alt="" />
            </button>
          )}
        </div>

        <div className={classes.product__info}>
          <h2 className={classes.product__title}>
            <Link
              className={classes.product__title}
              to={`/product/${this.props.id}`}
            >
              {this.props.brand} {this.props.name}
            </Link>
          </h2>
          <div className={classes.product__value}>
            {this.props.currency} {price.amount}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (prod) => dispatch(cartActions.addItemToCart(prod)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
