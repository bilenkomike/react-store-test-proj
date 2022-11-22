import { Component } from "react";

import classes from "./MiniCartItem.module.css";

import { connect } from "react-redux";

import MiniCartAttributes from "../MiniCartAttributes/MiniCartAttributes";
import { cartActions } from "../../store/cartSlice/cartSlice";
import { productsActions } from "../../store/productsSlice/productsSlice";

class MiniCartItem extends Component {
  render() {
    if (this.props.product) {
      return (
        <div className={classes.mini__cart__item}>
          <div className={classes.mini__cart__item__left}>
            <h2 className={classes.mini__cart__item__title}>
              {this.props.product.brand}
            </h2>
            <h4 className={classes.mini__cart__item__subtitle}>
              {this.props.product.name}
            </h4>
            <div className={classes.mini__cart__item__price}>
              {this.props.currency}
              {
                this.props.product.prices.find(
                  (price) => price.currency.symbol === this.props.currency
                ).amount
              }
            </div>

            <MiniCartAttributes
              selectedAttributes={this.props.attributes}
              attributes={this.props.product.attributes}
            />
          </div>
          <div className={classes.mini__cart__item__right}>
            <div className={classes.mini__cart__item__add__buttons}>
              <div
                className={classes.mini__cart__item__sign}
                onClick={() => {
                  this.props.addItemToCart(this.props.id);
                }}
              >
                +
              </div>
              <div className={classes.mini__cart__item__num__sign}>
                {this.props.count}
              </div>
              <div
                className={classes.mini__cart__item__sign}
                onClick={() => {
                  this.props.removeItemFromCart(this.props.id);
                }}
              >
                -
              </div>
            </div>
            <div className={classes.mini__cart__item__img__block}>
              <img
                src={this.props.product.gallery.at(0)}
                style={{ height: "190px", width: "121px", display: "block" }}
                alt=""
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencies.selected.symbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(productsActions.getProduct(id)),

    addItemToCart: (id, newState) =>
      dispatch(cartActions.addItemToCart({ id })),
    removeItemFromCart: (id) =>
      dispatch(cartActions.removeItemFromCart({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartItem);
