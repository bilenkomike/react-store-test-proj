import { PureComponent } from "react";
import classes from "./Attributes.module.css";

class Attributes extends PureComponent {
  state = {};

  setNewAttrs = () => {
    this.props.setAttrs(this.state.newState);
  };

  componentDidMount() {
    this.setProps();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.setProps();
    }
  }

  setProps() {
    let newState = {};
    const { attributes } = this.props;
    attributes.map((attr) => {
      newState[attr.name.split(" ").join("-").toLowerCase()] =
        attr.type === "text" ? attr.items[0].value : attr.items[0].displayValue;
      return attr;
    });

    this.setState({ newState });
    setTimeout(this.setNewAttrs, 200);
  }

  setNewProp = (key, val) => {
    const newStateProp = {};
    newStateProp[key] = val;
    this.setState((prevState) => {
      return {
        ...prevState,
        newState: { ...prevState.newState, ...newStateProp },
      };
    });
    setTimeout(this.setNewAttrs, 200);
  };

  render() {
    return this.props.attributes.map((attribute) => {
      const { type, name, items } = attribute;
      const keyVal = name.split(" ").join("-").toLowerCase();
      const props = { ...this.state.newState };
      if (type.trim() === "text") {
        return (
          <div className={classes.product__size} key={name}>
            <div className={classes.product__size__title}>
              {name.toUpperCase()}:
            </div>
            <div className={classes.product__size__list}>
              {items.map((item, index) => {
                return (
                  <div
                    onClick={() => this.setNewProp([keyVal], item.value)}
                    className={`${classes.product__size__list__item} ${
                      props[keyVal] === item.value && classes.active
                    }`}
                    key={`${keyVal}-${item.value}`}
                    id={`${keyVal}-${item.value}`}
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
          <div className={classes.product__color} key={name}>
            <div className={classes.product__color__title}>
              {name.toUpperCase()}:
            </div>
            <div className={classes.product__color__list}>
              {items.map((item, index) => {
                return (
                  <div
                    onClick={() => this.setNewProp([keyVal], item.displayValue)}
                    className={`${classes.product__color__list__item} ${
                      props[keyVal] === item.displayValue && classes.active
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

export default Attributes;
