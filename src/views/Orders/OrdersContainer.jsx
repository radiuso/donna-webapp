import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrdersListView from './OrdersListView'

// Register all routes for the orders part
const OrdersContainer = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} exact component={OrdersListView} />
    </Switch>
)

export default OrdersContainer
