
import {PureComponent} from 'react';

import classes from './Products.module.css';
import ProductsList from '../../Components/Products/ProductsList';

import FetchData from '../../fetchData/FetchData';

import { connect } from 'react-redux';
import { cartActions } from '../../store/cartSlice/cartSlice';


class ProductsComponent extends PureComponent {
    state = {
        loading: true,
        products: []
    }

    getProducts = async() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    loading: true,
                }
            })
            const resp = await FetchData.getProducts(this.props.category);
        
            
            
            this.setState(prevState => {
                return {
                    ...prevState, 
                    loading: false,
                    products: resp
                }
            });
        
    } 

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.category !== this.props.category) {
            this.getProducts();
        }
    }
    
    

    render() {
          
        
        return (
            <>
                <h1 className={classes.products__title} style={{ textTransform: 'capitalize' }}>{this.props.category}</h1>
                {!this.state.loading && <ProductsList category={this.props.category} products={this.state.products} />}
            </>
        );
    }

}


const mapDispatchToProps = dispatch => {
    return {
        setAllProds: (prods ) => dispatch(cartActions.setAllProducts(prods)),
        sortByCategory: category => dispatch(cartActions.sortByCategory(category))
    }
}

const mapStateToProps = state => {
    return {
        
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(ProductsComponent);