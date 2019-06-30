import React from 'react';
import { Consumer } from './context/OrderContext';

const Header = () => {
    return (
        <div>
            <span>
                <Consumer>
                    {(value) => (`購物車 (${value.orders.length})`)}
                </Consumer>
            </span>
            <hr />
        </div>
    );
}

export default Header;