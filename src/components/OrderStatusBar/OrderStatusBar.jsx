import React from 'react'
import classnames from 'classnames'

import './OrderStatusBar.scss'

const OrderStatusBar = ({ status }) => (
    <span className={classnames({
        'status': true,
        'status-ordered': status === 1,
        'status-prepared': status === 2,
        'status-delivered': status === 3,
        'status-canceled': status === 4,
    })} />
)

export default OrderStatusBar
