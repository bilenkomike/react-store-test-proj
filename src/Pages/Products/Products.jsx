import { useParams } from 'react-router-dom';

import {PureComponent} from 'react';

import classes from './Products.module.css';
import ProductsList from '../../Components/Products/ProductsList';

import FetchData from '../../fetchData/FetchData';




class ProductsComponent extends PureComponent {
    state = {
        products : [],
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     if((this.props.category !== prevProps.category )&& ) {
    //         this.getProducts();
    //     }
    //     return false;
    // }
    getProducts = async() => {

        if(this.state.products.length <= 0) {
            console.log('yes');
            const resp = await FetchData.getProducts(this.props.category);
            
            // this.setState({products: resp});
            console.log(resp);
            // // this.setState(prevState => {
            // //     return {
            // //         products: resp
            // //     }
            // // });
            // return resp;
        }
        else {
            return false;
        }
        
    } 
    
    

    render() {
        this.getProducts();  
        
        return (
            <>
            
                <h1 className={classes.products__title}>{this.props.category}</h1>
                <ProductsList products={this.state.products} />
            </>
        );
    }

}


function Products () {
    let params = useParams().category;

    
    
    return <ProductsComponent category={params} />;
}

export default Products;



