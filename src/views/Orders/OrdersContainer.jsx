import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrdersListView from './OrdersListView'
import OrderDetailView from './OrderDetailsView'

// Register all routes for the orders part
const OrdersContainer = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} exact component={OrdersListView} />
        <Route path={`${match.url}/:id`} component={OrderDetailView} />
    </Switch>
)

export default OrdersContainer
