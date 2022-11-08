import {Component} from 'react';

import classes from './MiniCartItem.module.css';

import FetchData from '../../fetchData/FetchData';
import { connect } from 'react-redux';


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
    }


    render() {
        console.log(this.props);

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
                        {this.props.currency} 
                    </div>

                    <div className={classes.mini__cart__item__size}>
                        <div className={classes.mini__cart__item__size__title}> Size:</div>
                        <div className={classes.mini__cart__item__size__list}> 
                            <div className={classes.mini__cart__item__size__list__item}>XS</div>
                            <div className={`${classes.mini__cart__item__size__list__item} ${classes.active}`}>S</div>
                            <div className={classes.mini__cart__item__size__list__item}>M</div>
                            <div className={classes.mini__cart__item__size__list__item}>L</div>
                        </div>
                    </div>

                    <div className={classes.mini__cart__item__color}>
                        <div className={classes.mini__cart__item__color__title}> Color:</div>
                        <div className={classes.mini__cart__item__color__list}> 
                            <div className={`${classes.mini__cart__item__color__list__item} ${classes.active}`} style={{backgroundColor: '#D3D2D5'}} >
                                
                            </div>
                            <div className={`${classes.mini__cart__item__color__list__item} `}  style={{backgroundColor: '#D3D2D5'}}>
                            </div>
                            <div className={`${classes.mini__cart__item__color__list__item} `}  style={{backgroundColor: '#D3D2D5'}}>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={classes.mini__cart__item__right}>
                    <div className={classes.mini__cart__item__add__buttons}>
                        <div className={classes.mini__cart__item__sign}>+</div>
                        <div className={classes.mini__cart__item__num__sign}>1</div>
                        <div className={classes.mini__cart__item__sign}>-</div>
                    </div>
                    <div className={classes.mini__cart__item__img__block}>
                        <img src="https://via.placeholder.com/121x190" alt="" />
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

export default connect(mapStateToProps) (MiniCartItem);