import { Component } from "react";
import CartList from "../../Components/Cart/CartList";

// css
import classes from "./Cart.module.css";
import { connect } from "react-redux";

// amount - 100%
// x - 21%
class Cart extends Component {
  render() {
    return (
      <div className="content">
        <h1 className={classes.cart__title}>Cart</h1>
        <CartList />
        <div className={classes.cart__total}>
          <div>
            Tax 21%:{" "}
            <span className={classes.total__info}>
              {this.props.currency.symbol}
              {this.props.total[this.props.currency.symbol] === undefined &&
                "0.00"}
              {this.props.total[this.props.currency.symbol] !== undefined &&
                (
                  (this.props.total[this.props.currency.symbol] * 21) /
                  100
                ).toFixed(2)}
            </span>
          </div>
          <div>
            Quantity:{" "}
            <span className={classes.total__info}>{this.props.count}</span>
          </div>
          <div className={classes.total}>
            Total:{" "}
            <span className={classes.total__info}>
              {this.props.currency.symbol}
              {this.props.total[this.props.currency.symbol] === undefined &&
                "0.00"}
              {this.props.total[this.props.currency.symbol] !== undefined &&
                this.props.total[this.props.currency.symbol].toFixed(2)}
            </span>
          </div>

          <button className={classes.cart__order__button}>Order</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencies.selected,
    total: state.cart.total,
    count: state.cart.count,
  };
};

export default connect(mapStateToProps, null)(Cart);
