import {Component} from 'react';
import classes from './Backdrop.module.css';


class Backdrop extends Component {


    render() {
        return <div onClick={this.props.onBackdropClick} className={`${this.props.active ? classes.backdrop : ''}`}></div>;
    }
}

export default Backdrop;