import {Component} from 'react';
import classes from './Attributes.module.css';


class Attributes extends Component {

    render () {

//         id
// : 
// "Size"
// items
// : 
// Array(4)
// 0
// : 
// {displayValue: '40', value: '40', id: '40'}
// 1
// : 
// {displayValue: '41', value: '41', id: '41'}
// 2
// : 
// {displayValue: '42', value: '42', id: '42'}
// 3
// : 
// {displayValue: '43', value: '43', id: '43'}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)
// name
// : 
// "Size"
// type
// : 
// "text"

        const { type, id, name, items } = this.props;

        if(type === 'text')  {

            return (<div className={classes.product__size}>
                        <div className={classes.product__size__title}> SIZE:</div>
                        <div className={classes.product__size__list}> 
                            <div className={classes.product__size__list__item}>XS</div>
                            <div className={`${classes.product__size__list__item} ${classes.active}`}>S</div>
                            <div className={classes.product__size__list__item}>M</div>
                            <div className={classes.product__size__list__item}>L</div>
                        </div>
                    </div>);

                    
        }
        else {
            return (
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
            );
        }

    }

}


export default Attributes;

