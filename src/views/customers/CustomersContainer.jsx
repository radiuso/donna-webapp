import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CustomersListView from './CustomersListView';
import CustomerDetailsView from './CustomerDetailsView';

// Register all routes for the customer part
const CustomersContainer = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} exact component={CustomersListView} />
        <Route path={`${match.url}/:id`} component={CustomerDetailsView} />
    </Switch>
);

export default CustomersContainer;
