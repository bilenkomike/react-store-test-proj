import classes from "./MiniCartAttributes.module.css";
import { Component } from "react";

class MiniCartAttributes extends Component {
  render() {
    // console.log(this.props);

    const { attributes, selectedAttributes } = this.props;

    return attributes.map((attribute) => {
      //   console.log(attribute);
      const { name, items, type } = attribute;
      if (type === "text") {
        return (
          <div
            className={classes.mini__cart__item__size}
            key={`mini_cart_${name}`}
          >
            <div className={classes.mini__cart__item__size__title}>
              {" "}
              {name}:
            </div>
            <div className={classes.mini__cart__item__size__list}>
              {items.map((item) => {
                return (
                  <div
                    key={name + item.id}
                    className={`${classes.mini__cart__item__size__list__item} ${
                      item.value ===
                        selectedAttributes[
                          name.toLowerCase().split(" ").join("-")
                        ] && classes.active
                    }`}
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
          <div
            className={classes.mini__cart__item__color}
            key={`mini_cart_${name}`}
          >
            <div className={classes.mini__cart__item__color__title}>
              {name}:
            </div>
            <div className={classes.mini__cart__item__color__list}>
              {items.map((item) => {
                return (
                  <div
                    key={name + item.id}
                    className={`${
                      classes.mini__cart__item__color__list__item
                    } ${
                      item.displayValue ===
                        selectedAttributes[
                          name.toLowerCase().split(" ").join("-")
                        ] && classes.active
                    }`}
                    style={{ backgroundColor: item.displayValue }}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      }
    });
  }
}

export default MiniCartAttributes;
