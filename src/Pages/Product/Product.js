import {Component} from 'react';
import classes from './Product.module.css';

class Product extends Component {

    render () {
        return (
            <div className={classes.product}>
                <div className={classes.product__additional__img__list}>
                    <img className={classes.product__additional__img}  src="https://via.placeholder.com/80" alt="" />
                    <img className={classes.product__additional__img} src="https://via.placeholder.com/80" alt="" />
                    <img className={classes.product__additional__img} src="https://via.placeholder.com/80" alt="" />
                </div>
                <img className={classes.product__main__img} src="https://via.placeholder.com/610x510" alt="" />
                <div>
                    <h1 className={classes.product__title}>
                        Apollo
                    </h1>
                    <h2 className={classes.product__subtitle}>
                        Running Short
                    </h2>
                    <div className={classes.product__size}>
                        <div className={classes.product__size__title}> SIZE:</div>
                        <div className={classes.product__size__list}> 
                            <div className={classes.product__size__list__item}>XS</div>
                            <div className={`${classes.product__size__list__item} ${classes.active}`}>S</div>
                            <div className={classes.product__size__list__item}>M</div>
                            <div className={classes.product__size__list__item}>L</div>
                        </div>
                    </div>

                    <div className={classes.product__color}>
                        <div className={classes.product__color__title}> COLOR:</div>
                        <div className={classes.product__color__list}> 
                            <div className={`${classes.product__color__list__item} ${classes.active}`} style={{backgroundColor: '#D3D2D5'}}></div>
                            <div className={`${classes.product__color__list__item} `}  style={{backgroundColor: '#D3D2D5'}}></div>
                            <div className={`${classes.product__color__list__item} `} style={{backgroundColor: '#D3D2D5'}}>
                                <div className={classes.product__color__list__item__inner} style={{backgroundColor: '#D3D2D5'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.product__price}>
                        <div className={classes.product__price__title}> PRICE:</div>
                        <div className={classes.product__price__value}>$50.00</div>
                    </div>
                    <button className={classes.product__button}>Add to cart</button>
                    <div className={classes.product__description}>
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </div>
                </div>
            </div>
        );

    }
}

export default Product;