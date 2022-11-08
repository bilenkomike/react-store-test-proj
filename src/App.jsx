import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Backdrop from './Components/UI/Backdrop/Backdrop';
import MiniCart from './Components/MiniCart/MiniCart';

import { Routes, Route,Navigate } from 'react-router-dom';

import FetchData from './fetchData/FetchData';


class App extends Component{
  state = {
    isPending: true,
    def: ''
  }

  firstTitle = async () => {
    const data = await FetchData.getLinks();
    
    if(data.length > 0) {
      this.setState({ isPending: false,def: data[0].name });
    }
  }

  componentDidMount() {
    this.firstTitle();
  }
  

  render() {

    if(!this.state.isPending) {
      return (
        <>
        <MiniCart /> 
          <Header  />
          <Backdrop />
          
  
          <Routes>
            <Route path="/*" element={<Navigate to={`/${this.state.def}`} />} />
            <Route path="/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:prodId" element={<Product />} />
            
          </Routes>
        </>
      );
    }
    else {
      return <p>Loading...</p>
    }
    
  }
}

export default App;
