import React from 'react';
import { Route } from 'react-router-dom';

import CustomersListView from './CustomersListView';

const CustomersContainer = () => (
    <div>
        <Route path="/" component={CustomersListView} />
    </div>
);

export default CustomersContainer;
