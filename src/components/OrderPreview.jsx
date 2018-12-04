import React from 'react';
import { OrderContext } from '../contexts/OrderContext';

const OrderPreview = () => (
    <OrderContext.Consumer>
        {order => (
            <React.Fragment>
                <p>{order.customer ? `${order.customer.firstName} ${order.customer.lastName}`  : 'Aucun client'}</p>
                <p>{order.procuts ? order.products.length : 0}</p>
                <p>{order.targetDate}</p>
            </React.Fragment>
        )}
    </OrderContext.Consumer>
);

export default OrderPreview;
