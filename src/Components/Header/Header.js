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
                        <div className={classes.currency__link} onClick={this.handleCurrencyClick.bind(this)}>
                            $ <img src={downAngle} className={`${classes.angle} ${this.state.currencyListActive ? classes.active : ''}`} width="6" heigth="3"  alt="" />
                        </div>
                        <div className={classes.nav__cart} onClick={this.props.toggle}>
                            <img src={cart} alt="" />
                            <span className={`${classes.cart__counter} ${this.state.cartCounter > 0 ? classes.active : ''}`} >{this.state.cartCounter}</span>
                        </div>
                    </div>
                    
                </nav>
                </div>
            </header>
            <CurrencyList active={this.state.currencyListActive} />
            <div style={{position: 'fixed', top: '0px', right: '0px',zIndex: 3}}>
                
                
            </div>
            </>
        );
    }
}


// const mapStateToProps 

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(miniCartActions.toggle())
    }
}


export default connect(null, mapDispatchToProps)(Header);