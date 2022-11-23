import { Component } from "react";
import classes from "./Backdrop.module.css";

import { connect } from "react-redux";
import { miniCartActions } from "../../../store/miniCartSlice/miniCartSlice";

class Backdrop extends Component {
  render() {
    return (
      <div
        onClick={this.props.toggle}
        className={`${this.props.open ? classes.backdrop : ""}`}
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.miniCart.open,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    toggle: () => dispach(miniCartActions.toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
