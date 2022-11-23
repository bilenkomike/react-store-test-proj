import { Component } from "react";
import Attributes from "../Attributes/Attributes";

import classes from "./CartItem.module.css";

import { cartActions } from "../../store/cartSlice/cartSlice";
import { connect } from "react-redux";

class CartItem extends Component {
  state = {
    imageId: 0,
  };

  increment = () => {
    let imageId = this.state.imageId + 1;
    if (imageId > this.props.product.gallery.length) imageId = 0;
    this.setState({ imageId });
  };

  decrement = () => {
    let imageId = this.state.imageId - 1;
    if (imageId < 0) imageId = this.props.product.gallery.length - 1;
    this.setState({ imageId });
  };

  render() {
    console.log(this.props);
    const { product, attributes, count } = this.props;
    return (
      product && (
        <>
          <div className={classes.cart__item}>
            <div className={classes.cart__item__left}>
              <h2 className={classes.cart__item__title}>{product.brand}</h2>
              <h4 className={classes.cart__item__subtitle}>{product.name}</h4>
              <div className={classes.cart__item__price}>
                {" "}
                {this.props.currency.symbol}
                {
                  product.prices.find(
                    (price) =>
                      price.currency.symbol === this.props.currency.symbol
                  ).amount
                }
              </div>

              <Attributes
                attributes={product.attributes}
                setAttrs={() => {}}
                cart={true}
                selectedAttributes={attributes}
              />
            </div>
            <div className={classes.cart__item__right}>
              <div className={classes.cart__item__add__buttons}>
                <div className={classes.cart__item__sign}>+</div>
                <div className={classes.cart__item__num__sign}>{count}</div>
                <div
                  className={classes.cart__item__sign}
                  onClick={() => {
                    this.props.removeItemFromCart({
                      id: this.props.id,
                      attributes: this.props.attributes,
                      prices: this.props.prices,
                    });
                  }}
                >
                  -
                </div>
              </div>
              <div className={classes.cart__item__img__block}>
                <img
                  src={product.gallery[this.state.imageId]}
                  style={{ width: 200, height: 288 }}
                  alt=""
                />

                {product.gallery.length > 1 && (
                  <>
                    <button
                      className={classes.cart__item__img__button__prev}
                      onClick={this.decrement}
                    >
                      {" "}
                      {`<`}{" "}
                    </button>
                    <button
                      className={classes.cart__item__img__button__next}
                      onClick={this.decrement}
                    >
                      {" "}
                      {`>`}{" "}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <hr className={classes.cart__line} />
        </>
      )
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(cartActions.addItemToCart(product)),
    removeItemFromCart: (product) =>
      dispatch(cartActions.removeItemFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
