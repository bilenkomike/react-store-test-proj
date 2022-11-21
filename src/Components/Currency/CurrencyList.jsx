import React, { Component } from "react";

import classes from "./CurrencyList.module.css";

import { connect } from "react-redux";
import {
  currenciesActions,
  getCurrencies,
} from "../../store/currenciesSlice/currenciesSlice";
// import { cartActions } from "../../store/cartSlice/cartSlice";

class CurrencyList extends Component {
  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    const { opened, currencies, toggle, changeCurr } = this.props;
    return (
      <div
        className={`${classes.currency__list}  ${opened ? classes.active : ""}`}
      >
        {currencies.length > 0 &&
          currencies.map((currency) => (
            <div
              className={classes.currency__list__item}
              key={currency.symbol}
              onClick={() => {
                toggle();
                changeCurr(currency.symbol);
              }}
            >
              {currency.symbol} {currency.label}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    opened: state.currencies.openList,
    currencies: state.currencies.currencies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => dispatch(getCurrencies()),
    changeCurr: (symb) => dispatch(currenciesActions.changeCurr({ symb })),
    toggle: () => dispatch(currenciesActions.toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
