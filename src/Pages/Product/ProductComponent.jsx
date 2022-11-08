import {Component} from 'react';
import { useParams } from 'react-router-dom';
import classes from './Product.module.css';


import FetchData from '../../fetchData/FetchData';
import { useDispatch } from 'react-redux';
import Attributes from '../../Components/Attributes/Attributes';

import { connect } from 'react-redux';

class ProductComponent extends Component {

    state = {
        product : {},
        loading: true,
        img: '',
    }

    getProduct = async() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    loading: true,
                }
            })
            const resp = await FetchData.getProduct(this.props.prodId);
            
            
            this.setState(prevState => {
                return {
                    ...prevState, 
                    product: resp,
                    loading: false,
                    img: resp.gallery[0]
                }
            });
        
    } 

    componentDidMount() {
        this.getProduct();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.prodId !== this.props.prodId) {
            this.getProduct();
        }
    }


    imgListClickHandle = (img) => {
        this.setState({img});
    }
    


    render () {
        if(!this.state.loading) {
            const {description, name, brand, gallery, attributes} = this.state.product;
        return (
            
            <div className={classes.product}>
                 
                <div className={classes.product__additional__img__list}>
                    
                    {gallery.length !== 1 && gallery.map(img => <img className={classes.product__additional__img}  onClick={() => {
                        this.imgListClickHandle(img);
                    }} src={img} key={img} alt="" />)}
                    
                </div>
                <img className={classes.product__main__img} src={this.state.img} alt={`${name} ${brand}`} /> 
                <div>
                    <h1 className={classes.product__title}>
                        {name}
                    </h1>
                    <h2 className={classes.product__subtitle}>
                        {brand}
                    </h2>
                    {attributes.length > 0 && attributes.map(attribute => <Attributes key={attribute.id} {...attribute} />)}
                    <div className={classes.product__price}>
                        <div className={classes.product__price__title}> PRICE:</div>
                        <div className={classes.product__price__value}>$50.00</div>
                    </div>
                    <button className={classes.product__button}>Add to cart</button>
                    <div className={classes.product__description} dangerouslySetInnerHTML={{__html: description}}>
                    </div>
                </div>
            </div>
        );
        }
        else {
            return <p>Loading....</p>
        }
    }
}

const mapStateToProps = state => {
    return {
        // cart: state.miniCart.open,
    }
}

export default connect(mapStateToProps) (ProductComponent);

