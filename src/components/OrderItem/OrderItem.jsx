import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import { getStatusLabel } from '../../services/order.service'
import OrderStatusBar from '../OrderStatusBar'

import './OrderItem.scss'

const OrderItem = withRouter(({ order, history }) => (
    <div className="order-item" onClick={() => history.push(`/orders/${order.id}`) }>
        <strong className="time">{ format(order.targetDate, 'HH-mm') }</strong>
        <OrderStatusBar status={order.status} />
        <div className="info">
            <p className="customer">{ order.customer.firstName } { order.customer.lastName }</p>
            <p className="status-text">{ getStatusLabel(order.status) }</p>
        </div>
    </div>
))

OrderItem.propTypes = {
    order: PropTypes.object.isRequired,
}

export default OrderItem
