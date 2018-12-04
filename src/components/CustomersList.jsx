import React from 'react'
import Icon from './Icon';

const CustomersList = ({ customers, onSelected, selectedCustomer }) => {
    const items = customers.map(customer => (
        <div className="box item is-selectable"
            onClick={() => onSelected(customer)}
            key={customer.id}
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
                    { selectedCustomer && selectedCustomer.id === customer.id ?
                        <Icon icon="check-circle" variant="primary" /> :
                        null
                    }
                </div>
            </article>
        </div>
    ))

    return (
        <div className="item-list">
            {items}
        </div>
    )
}

export default CustomersList
