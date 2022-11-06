import {Component} from 'react';

import classes from './Category.module.css';
import ProductsList from '../../Components/Products/ProductsList';

class Category extends Component {


    render() {
        return (
            <>
                <h1 className={classes.category__title}>Category name</h1>
                <ProductsList />
            </>
        );
    }

}

export default Category;