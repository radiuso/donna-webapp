import React from 'react';

export const OrderContext = React.createContext({
    customer: null,
    products: [],
    targetDate: null,
});
