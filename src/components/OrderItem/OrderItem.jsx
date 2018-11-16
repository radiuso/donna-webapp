import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import classnames from 'classnames'
import { getStatusLabel } from '../../services/order.service'
import './OrderItem.scss'

const OrderItem = withRouter(({ order, history }) => (
    <div className="order-item" onClick={() => history.push(`/orders/${order.id}`) }>
        <strong className="time">{ format(order.targetDate, 'HH-mm') }</strong>
        <span className={classnames({
            'status': true,
            'status-ordered': order.status === 1,
            'status-prepared': order.status === 2,
            'status-delivered': order.status === 3,
            'status-canceled': order.status === 4,
        })} />
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
