import React,{Component} from 'react';

import classes from './CurrencyList.module.css';
import FetchData from '../../fetchData/FetchData';

import { connect } from 'react-redux';
import { currenciesActions } from '../../store/currenciesSlice/currenciesSlice';




class CurrencyList extends Component {
    state = {
        loading: true,
        currencies: []
    }
    
    getCurrencies = async() => {
        this.setState(prevState => {
            return {
                ...prevState,
                loading: true,
            }
        })
        const resp = await FetchData.getCurrencies();
        
        this.props.pushCurrencies(resp);
        
        this.setState(prevState => {
            return {
                ...prevState, 
                currencies: resp,
                loading: false,
            }
        });
    
} 

    componentDidMount() {
        this.getCurrencies();
    }

    render() {
        const { opened, currencies, toggle,changeCurr } = this.props;
        return (
            <div className={`${classes.currency__list}  ${opened ? classes.active : ''}` }>
                {currencies.length > 0 && currencies.map(currency => <div className={classes.currency__list__item} key={currency.symbol} onClick={() => {
                    toggle();
                    changeCurr(currency.symbol);

                }}>{currency.symbol} {currency.label}</div>)}
                
            </div>
        );
    }
}


const mapStateToProps =  state => {
    return {
        opened: state.currencies.openList,
        currencies: state.currencies.currencies,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        pushCurrencies: (curr) => dispatch(currenciesActions.pushCurrenciesInitial({curr})),
        changeCurr: (symb) => dispatch(currenciesActions.changeCurr({symb})),
        toggle: () => dispatch(currenciesActions.toggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CurrencyList);