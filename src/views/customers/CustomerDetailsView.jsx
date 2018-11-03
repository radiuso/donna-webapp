import React from 'react';

const CustomerDetails = ({ match }) => (
    <p>{ match.params.id }</p>
);

export default CustomerDetails;
