import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Backdrop from "./Components/UI/Backdrop/Backdrop";
import MiniCart from "./Components/MiniCart/MiniCart";
import CurrencyList from "./Components/Currency/CurrencyList";

import { Routes, Route } from "react-router-dom";

import { getProducts } from "./store/productsSlice/productsSlice";
import { connect } from "react-redux";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.setState({ loading: false });
    }
    return;
  }

  render() {
    if (!this.state.loading) {
      return (
        <>
          <MiniCart />
          <CurrencyList active={true} />
          <Header />
          <Backdrop />

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:prodId" element={<Product />} />
          </Routes>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.isLoading,
    def: state.products.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
