// default
import { Component } from "react";

// react-router
import { Link } from "react-router-dom";

// images
import logo from "./images/a-logo.png";
import cart from "./images/cart.png";
import downAngle from "./images/angle-down-solid.svg";

// css
import classes from "./Header.module.css";

// redux
import { connect } from "react-redux";

import { miniCartActions } from "../../store/miniCartSlice/miniCartSlice";
import { currenciesActions } from "../../store/currenciesSlice/currenciesSlice";

class Header extends Component {
  state = {
    links: [],
  };

  handleCurrencyClick() {
    this.setState({ currencyListActive: !this.state.currencyListActive });
  }

  render() {
    return (
      <>
        <header className={classes.header}>
          <div className={classes.header__inner}>
            <nav className={classes.nav}>
              <div className={classes.nav__left}>
                {this.props.categories &&
                  this.props.categories.map((link) => (
                    <Link
                      key={link}
                      to={`/${link}`}
                      className={`${classes.nav__link} ${
                        this.props.activeLink === link ? classes.active : ""
                      }`}
                    >
                      {link}
                    </Link>
                  ))}
              </div>
              <div className={classes.logo__box}>
                <img src={logo} alt="" />
              </div>
              <div className={classes.nav__right}>
                <div
                  className={classes.currency__link}
                  onClick={this.props.toggleCurrenciesList}
                >
                  {this.props.curr !== null && this.props.curr.symbol}{" "}
                  <img
                    src={downAngle}
                    className={`${classes.angle} ${
                      this.props.openCurr ? classes.active : ""
                    }`}
                    width="6"
                    heigth="3"
                    alt=""
                  />
                </div>
                <div
                  className={classes.nav__cart}
                  onClick={this.props.toggleMiniCart}
                >
                  <img src={cart} alt="" />
                  <span
                    className={`${classes.cart__counter} ${
                      this.props.totalAmount > 0 ? classes.active : ""
                    }`}
                  >
                    {this.props.totalAmount}
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curr: state.currencies.selected,
    totalAmount: state.cart.count,
    openCurr: state.currencies.openList,
    activeLink: state.products.selectedCategory,
    categories: state.products.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMiniCart: () => dispatch(miniCartActions.toggle()),
    toggleCurrenciesList: () => dispatch(currenciesActions.toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
