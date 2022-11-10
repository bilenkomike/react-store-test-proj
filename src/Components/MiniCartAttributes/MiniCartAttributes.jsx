import classes from './MiniCartAttributes.module.css';
import {Component} from 'react';

class MiniCartAttributes extends Component {

    render () {
        return <>
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
        </>
    }
}

export default MiniCartAttributes;