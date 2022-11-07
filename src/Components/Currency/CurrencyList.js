import {Component} from 'react';

import classes from './CurrencyList.module.css';

class CurrencyList extends Component {
    
    render() {
        return (
            <div className={`${classes.currency__list}  ${this.props.active ? classes.active : ''}` }>
                <div className={classes.currency__list__item}>$ USD</div>
                <div className={classes.currency__list__item}>€ EUR</div>
                <div className={classes.currency__list__item}>¥ JPY</div>
            </div>
        );
    }
}

export default CurrencyList;