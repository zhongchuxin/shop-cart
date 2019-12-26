import React, { Component } from 'react'

import Products from './Products'
import Cart from './Cart'

class Main extends Component {

    render() {
        return (
            <div>
                <h1>Shopping Cart Example</h1>
                <hr/>
                    <Products products={this.props.products} addtocart={this.props.addtocart}/>
                <hr/>
                    <Cart cart={this.props.cart} checkout={this.props.checkout}/>
            </div>
        );
    }
}

export default Main;