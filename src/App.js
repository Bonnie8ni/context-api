import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import { Provider } from './context/OrderContext';

class App extends Component {
    state = {
        orders: [],
    }

    addOrder = (order) => {
        this.setState({
            orders: [...this.state.orders, order],
            addOrder: this.addOrder
        })
    }

    render() {
        const { orders } = this.state;
        const contextValue = {
            orders,
            addOrder: this.addOrder,
        }
        
        return (
            <div>
                <Provider
                    value={contextValue}
                >
                    <Header />
                    <ProductList/>
                </Provider>
            </div>
        );
    }
}

export default App;