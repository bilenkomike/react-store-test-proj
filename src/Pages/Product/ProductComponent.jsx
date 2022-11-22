import { Component } from "react";

import classes from "./Product.module.css";
import parser from "html-react-parser";

// import FetchData from "../../fetchData/FetchData";

import Attributes from "../../Components/Attributes/Attributes";

import { connect } from "react-redux";
import { cartActions } from "../../store/cartSlice/cartSlice";
import { productsActions } from "../../store/productsSlice/productsSlice";

class ProductComponent extends Component {
  state = {
    img: "",
  };

  componentDidMount() {
    this.props.getProduct(this.props.prodId);
  }

  imgListClickHandle = (img) => {
    this.setState({ img });
  };

  addToCartHandler = () => {
    const { id, prices } = this.props.product;

    console.log(this.state.attrs);
    this.props.addToCardItem({ id, prices, attributes: this.state.attrs });
    // prepared params and keys
  };

  setAttrs = (attrs) => this.setState({ attrs });

  render() {
    console.log(this.state);
    if (this.props.product.name) {
      const { description, name, brand, gallery, attributes, prices, id } =
        this.props.product;

      return (
        <div className={classes.product}>
          <div className={classes.product__additional__img__list}>
            {gallery.length !== 1 &&
              gallery.map((img) => (
                <img
                  className={classes.product__additional__img}
                  onClick={() => {
                    this.imgListClickHandle(img);
                  }}
                  src={img}
                  key={img}
                  alt=""
                />
              ))}
          </div>
          <img
            className={classes.product__main__img}
            src={this.state.img ? this.state.img : gallery[0]}
            alt={`${name} ${brand}`}
          />
          <div>
            <h1 className={classes.product__title}>{name}</h1>
            <h2 className={classes.product__subtitle}>{brand}</h2>
            {attributes.length > 0 && (
              <Attributes
                attributes={attributes}
                setAttrs={this.setAttrs}
                id={id}
              />
            )}
            <div className={classes.product__price}>
              <div className={classes.product__price__title}> PRICE:</div>
              <div className={classes.product__price__value}>
                {this.props.currency.symbol}
                {prices
                  .find(
                    (price) =>
                      price.currency.symbol === this.props.currency.symbol
                  )
                  .amount.toFixed(2)}
              </div>
            </div>
            <button
              className={classes.product__button}
              onClick={this.addToCartHandler}
            >
              Add to cart
            </button>
            <div className={classes.product__description}>
              {parser(description)}
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading....</p>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    currency: state.currencies.selected,
  };
};

const mapDispatchToProps = (dispathc) => {
  return {
    getProduct: (id) => dispathc(productsActions.getProduct(id)),
    addToCardItem: (product) => dispathc(cartActions.addItemToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
