import {Component} from 'react';

import classes from './CartItem.module.css';

class CartItem extends Component {

    render() {
        return(
            <>
            
            
            <div className={classes.cart__item}>
                <div className={classes.cart__item__left}>
                    <h2 className={classes.cart__item__title}>
                        Apollo
                    </h2>
                    <h4 className={classes.cart__item__subtitle}>
                        Running Short
                    </h4>
                    <div className={classes.cart__item__price}>
                        $50.00
                    </div>

                    <div className={classes.cart__item__size}>
                        <div className={classes.cart__item__size__title}> SIZE:</div>
                        <div className={classes.cart__item__size__list}> 
                            <div className={classes.cart__item__size__list__item}>XS</div>
                            <div className={`${classes.cart__item__size__list__item} ${classes.active}`}>S</div>
                            <div className={classes.cart__item__size__list__item}>M</div>
                            <div className={classes.cart__item__size__list__item}>L</div>
                        </div>
                    </div>

                    <div className={classes.cart__item__color}>
                        <div className={classes.cart__item__color__title}> COLOR:</div>
                        <div className={classes.cart__item__color__list}> 
                            <div className={`${classes.cart__item__color__list__item} ${classes.active}`} style={{backgroundColor: '#D3D2D5'}} >
                                
                            </div>
                            <div className={`${classes.cart__item__color__list__item} `}  style={{backgroundColor: '#D3D2D5'}}>
                            </div>
                            <div className={`${classes.cart__item__color__list__item} `}  style={{backgroundColor: '#D3D2D5'}}>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={classes.cart__item__right}>
                    <div className={classes.cart__item__add__buttons}>
                        <div className={classes.cart__item__sign}>+</div>
                        <div className={classes.cart__item__num__sign}>1</div>
                        <div className={classes.cart__item__sign}>-</div>
                    </div>
                    <div className={classes.cart__item__img__block}>
                        <img src="https://via.placeholder.com/200x288" alt="" />
                        <button className={classes.cart__item__img__button__prev}> {`<`} </button>
                        <button className={classes.cart__item__img__button__next}> {`>`} </button>
                    </div>
                </div>
            </div>
            <hr className={classes.cart__line} />
            </>
        );
    }
}

export default CartItem;