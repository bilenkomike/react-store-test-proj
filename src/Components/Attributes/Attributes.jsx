import { Component } from "react";
import classes from "./Attributes.module.css";

class Attributes extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
    this.props.items.map((item, index) => {
      if (index === 0) {
        this.setState({
          [this.props.name.split(" ").join("-").toLowerCase()]:
            item.type === "text" ? item.value : item.displayValue,
        });
      }
      this.setState((prevState) => {
        return { ...prevState, ...this.state };
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getProductsProps(this.state);
    }
  }

  onPropClickHandler = (key, value) => {
    this.setState((prevState) => {
      return { ...prevState, [key]: value };
    });
    this.props.getProductsProps(this.state);
  };

  render() {
    const { type, name, items } = this.props;
    // console.log(this.state);

    const keyVal = name.split(" ").join("-").toLowerCase();

    if (type === "text") {
      return (
        <div className={classes.product__size}>
          <div className={classes.product__size__title}>
            {name.toUpperCase()}:
          </div>
          <div className={classes.product__size__list}>
            {items.map((item) => {
              return (
                <div
                  onClick={this.onPropClickHandler.bind(
                    this,
                    keyVal,
                    item.displayValue
                  )}
                  className={`${classes.product__size__list__item} ${
                    this.state[keyVal] === item.displayValue && classes.active
                  }`}
                  key={`${keyVal}-${item.displayValue}`}
                  id={`${keyVal}-${item.displayValue}`}
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.product__color}>
          <div className={classes.product__color__title}>
            {name.toUpperCase()}:
          </div>
          <div className={classes.product__color__list}>
            {items.map((item) => (
              <div
                onClick={this.onPropClickHandler.bind(
                  this,
                  keyVal,
                  item.displayValue
                )}
                className={`${classes.product__color__list__item} ${
                  this.state[keyVal] === item.displayValue && classes.active
                }`}
                style={{ backgroundColor: item.displayValue }}
              ></div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Attributes;
