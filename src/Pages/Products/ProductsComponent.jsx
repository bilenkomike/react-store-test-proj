import { PureComponent } from "react";

import classes from "./Products.module.css";
import ProductsList from "../../Components/Products/ProductsList";

import { connect } from "react-redux";
// import { cartActions } from "../../store/cartSlice/cartSlice";
import { productsActions } from "../../store/productsSlice/productsSlice";

class ProductsComponent extends PureComponent {
  state = {
    loading: true,
    products: [],
  };

  // getProducts = async () => {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       loading: true,
  //     };
  //   });
  //   const resp = await FetchData.getProducts(this.props.category);

  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       loading: false,
  //       products: resp,
  //     };
  //   });
  // };

  // componentDidUpdate(pr)

  componentDidMount() {
    if (this.props.category) {
      this.props.getProdsByCategory(this.props.category);
    } else {
      this.props.getProdsByCategory();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.props.getProdsByCategory(this.props.category);
    }
  }

  render() {
    if (!this.props.products.isLoading) {
      const { products } = this.props;
      return (
        <>
          <h1
            className={classes.products__title}
            style={{ textTransform: "capitalize" }}
          >
            {this.props.category ? this.props.category : this.props.selectedCat}
          </h1>

          <ProductsList
            category={this.props.category || this.props.selectedCat}
            products={products}
          />
        </>
      );
    } else {
      return <>Loading....</>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.selectedProds,
    loading: state.products.isLoading,
    selectedCat: state.products.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProdsByCategory: (category = "") =>
      dispatch(productsActions.getProductsByCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);
