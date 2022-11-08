import {Component} from 'react';
import { Link } from 'react-router-dom';

// logo
import logo from './images/a-logo.png';
import cart from './images/cart.png';
import downAngle from './images/angle-down-solid.svg';
import CurrencyList from '../Currency/CurrencyList';
// css
import classes from './Header.module.css';

import { connect } from 'react-redux';
import { miniCartActions } from '../../store/miniCartSlice/miniCartSlice';

import FetchData from '../../fetchData/FetchData';
import { currenciesActions } from '../../store/currenciesSlice/currenciesSlice';

class Header extends Component{
    state = {
        links: [],
        activeLink: '',
        cartCounter: 0,
    }

    handleCurrencyClick () {
        this.setState({currencyListActive: !this.state.currencyListActive});
    }

    loadLinks = async () => {
        if(this.state.links.length === 0) {
            const data = await FetchData.getLinks();
        
            if(data.length > 0) {
            if(this.state.activeLink === '') {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        activeLink: data[0].name
                    }
                })    
            }
            this.setState(prevState => {
                return {
                    ...prevState,
                    links: data
                }
            })
            return;
            }
            return;
        }
        return false;
      }

      


    render() {
        
        this.loadLinks();
        
        
        return (
            <>
            <header className={classes.header}>
                <div className={classes.header__inner}>
                <nav className={classes.nav}>
                    <div className={classes.nav__left}>
                    {this.state.links.map(link => <Link key={link.name} onClick={() => this.setState(prevState => {
                        return {...prevState, activeLink: link.name}
                    })} to={`/${link.name}`} className={`${classes.nav__link} ${this.state.activeLink === link.name ?  classes.active : ''}`}>{link.name}</Link>)}
                        
                    </div>
                    <div className={classes.logo__box}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={classes.nav__right}>
                        <div className={classes.currency__link} onClick={this.props.toggleCurrenciesList}>
                            {this.props.curr !== null && this.props.curr.symbol} <img src={downAngle} className={`${classes.angle} ${this.props.openCurr ? classes.active : ''}`} width="6" heigth="3"  alt="" />
                        </div>
                        <div className={classes.nav__cart} onClick={this.props.toggleMiniCart}>
                            <img src={cart} alt="" />
                            <span className={`${classes.cart__counter} ${this.props.totalAmount > 0 ? classes.active : ''}`} >{this.props.totalAmount}</span>
                        </div>
                    </div>
                    
                </nav>
                </div>
            </header>
            
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        curr: state.currencies.selected,
        totalAmount: state.cart.count,
        openCurr: state.currencies.openList
    }
}


// const mapStateToProps 

const mapDispatchToProps = dispatch => {
    return {
        toggleMiniCart: () => dispatch(miniCartActions.toggle()),
        toggleCurrenciesList: () => dispatch(currenciesActions.toggle())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);