import React from 'react'
import { OrderContext } from '../../contexts/OrderContext';
// TODO add in media-right info concerning current selected customer
const CustomersList = ({ customers, onSelected }) => {
    const items = customers.map(customer => (
        <OrderContext.Consumer key={customer.id}>
            {order => (
                <div className="box item is-selectable"
                    onClick={() => onSelected(customer)}
                >
                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{customer.firstName} {customer.lastName}</strong> <small>{customer.city}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            { customer.id === order.customer ? 'Lui' : '' }
                        </div>
                    </article>
                </div>
            )}
        </OrderContext.Consumer>
    ))

    return (
        <div className="item-list">
            {items}
        </div>
    )
}

export default CustomersList
