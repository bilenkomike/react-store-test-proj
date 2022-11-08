import { useParams } from 'react-router-dom';
import ProductsComponent from './ProductsComponent';

function Products () {
    let params = useParams().category;
    
    return <ProductsComponent category={params} />;
}

export default Products;






