import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Category from './Pages/Category/Category';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Backdrop from './Components/UI/Backdrop/Backdrop';

class App extends Component{
  constructor() {
    super(); 
    this.state = {
      miniCart: true
    };
    
  }

  handleMiniCartActivity() {
    this.setState({miniCart: !this.state.miniCart});
    document.body.classList.toggle('no-scroll');
  }

  

  render() {
    return (
      <>
        <Header miniCart={this.state.miniCart} onCartClick={this.handleMiniCartActivity.bind(this)} />
        
        <Backdrop onBackdropClick={this.handleMiniCartActivity.bind(this)} active={this.state.miniCart} />
        
        
          {/* <Category /> */}
          <Cart />
          {/* <Product /> */}
        
        
        
      </>
    );
  }
}

export default App;
