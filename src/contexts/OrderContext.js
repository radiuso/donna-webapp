import React from 'react';

export const OrderContext = React.createContext({
    currentStep: 1,
    customer: null,
    products: [],
    targetDate: null,
});
