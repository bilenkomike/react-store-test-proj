import { useParams } from 'react-router-dom';

import {PureComponent} from 'react';

import classes from './Products.module.css';
import ProductsList from '../../Components/Products/ProductsList';

import FetchData from '../../fetchData/FetchData';





class ProductsComponent extends PureComponent {
    state = {
        products : [],
        loading: true,
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
                    products: resp,
                    loading: false
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
                {!this.state.loading && <ProductsList products={this.state.products} />}
            </>
        );
    }

}


function Products () {
    let params = useParams().category;
    
    return <ProductsComponent category={params} />;
}

export default Products;






