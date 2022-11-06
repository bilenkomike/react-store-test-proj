import {Component} from 'react';

// logo
import logo from './images/a-logo.png';
import cart from './images/cart.png';
import downAngle from './images/angle-down-solid.svg';
import CurrencyList from '../Currency/CurrencyList';
import MiniCart from '../MiniCart/MiniCart';
// css
import classes from './Header.module.css';

class Header extends Component{

    constructor() {
        super();
        this.state = {
            activeLink: 'Women',
            currencyListActive:false,
            cartCounter: 0,
            // miniCart: false
        }
    }

    handleCurrencyClick () {
        this.setState({currencyListActive: !this.state.currencyListActive});
    }
    componentDidMount() {
        console.log(this.props);
    }

    // handleMiniCartClick() {
    //     this.setState({miniCart: !this.state.miniCart});
    //     ;
    // }

    render() {
        return (
            <>
            <header className={classes.header}>
                <div className={classes.header__inner}>
                <nav className={classes.nav}>
                    <div className={classes.nav__left}>
                        <a className={`${classes.nav__link} ${this.state.activeLink === 'Women' ? classes.active : ''}`}>Women</a>
                        <a className={`${classes.nav__link} ${this.state.activeLink === 'Men' ? classes.active : ''} `}>Men</a>
                        <a className={`${classes.nav__link} ${this.state.activeLink === 'Kids' ? classes.active : ''}`}>Kids</a>
                    </div>
                    <div className={classes.logo__box}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={classes.nav__right}>
                        <div className={classes.currency__link} onClick={this.handleCurrencyClick.bind(this)}>
                            $ <img src={downAngle} className={`${classes.angle} ${this.state.currencyListActive ? classes.active : ''}`} width="6" heigth="3"  alt="" />
                        </div>
                        <div className={classes.nav__cart} onClick={this.props.onCartClick}>
                            <img src={cart} alt="" />
                            <span className={`${classes.cart__counter} ${this.state.cartCounter > 0 ? classes.active : ''}`} >{this.state.cartCounter}</span>
                        </div>
                    </div>
                    
                </nav>
                </div>
            </header>
            <div style={{position: 'fixed', top: '0px', right: '0px',zIndex: 3}}>
                <CurrencyList active={this.state.currencyListActive} />
                <MiniCart active={this.props.miniCart} />
            </div>
            </>
        );
    }
}


export default Header;