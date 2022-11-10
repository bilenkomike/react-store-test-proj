import {Component} from 'react';

import classes from './MiniCartItem.module.css';

import FetchData from '../../fetchData/FetchData';
import { connect } from 'react-redux';

import MiniCartAttributes from '../MiniCartAttributes/MiniCartAttributes';
import { cartActions } from '../../store/cartSlice/cartSlice';

class MiniCartItem extends Component {

    state = {
        loading: true
    }
    

    getProduct = async() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    loading: true,
                }
            })
            console.log(this.props.id);
            const resp = await FetchData.getProduct(this.props.id);
            
            
            this.setState(prevState => {
                return {
                    ...prevState, 
                    product: resp,
                    loading: false,
                }
            });
    } 
    

    componentDidMount() {
        this.getProduct();

        console.log(this.state);
    }


    render() {
        console.log(this.props.id);

        if(!this.state.loading) return (
            <div className={classes.mini__cart__item}>
                <div className={classes.mini__cart__item__left}>
                    <h2 className={classes.mini__cart__item__title}>
                        {this.state.product.brand}
                    </h2>
                    <h4 className={classes.mini__cart__item__subtitle}>
                       {this.state.product.name}
                    </h4>
                    <div className={classes.mini__cart__item__price}>
                        {this.props.currency} {this.state.product.prices.find(price => price.currency.symbol === this.props.currency).amount}
                    </div>

                    <MiniCartAttributes />
                    
                </div>
                <div className={classes.mini__cart__item__right}>
                    <div className={classes.mini__cart__item__add__buttons}>
                        <div className={classes.mini__cart__item__sign} onClick={() => {
                            this.props.addItemToCart(this.props.id);
                        }}>+</div>
                        <div className={classes.mini__cart__item__num__sign}>{this.props.count}</div>
                        <div className={classes.mini__cart__item__sign} onClick={() => {
                            this.props.removeItemFromCart(this.props.id);
                        }}>-</div>
                    </div>
                    <div className={classes.mini__cart__item__img__block}>
                        <img src={this.state.product.gallery.at(0)} style={{ height: '190px', width: '121px', display: 'block' }} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        currency: state.currencies.selected.symbol
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (id, newState) => dispatch(cartActions.addItemToCart({id})),
        removeItemFromCart: id => dispatch(cartActions.removeItemFromCart({id})),
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (MiniCartItem);