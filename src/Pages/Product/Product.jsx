import { useParams } from "react-router-dom";
import ProductComponent from "./ProductComponent";


const Product = props => {
    const params = useParams();

    const {prodId} = params;
    
    return <ProductComponent prodId={prodId} />
}


export default Product;