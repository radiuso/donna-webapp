import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import OrdersList from '../../components/OrdersList';

const CUSTOMER_QUERY = gql`
query Customer($customerId: Int!) {
    customer(id: $customerId) {
        firstName,
        lastName,
        city,
        phone
    }
}`;

const CustomerDetails = ({ match }) => (
    <Query query={CUSTOMER_QUERY} variables={{ customerId: match.params.id }}>
        {({ loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            return (
            <React.Fragment>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            {data.customer.firstName} {data.customer.lastName}
                        </h1>
                        <h2 className="subtitle">
                            {data.customer.phone}
                            <br/>
                            {data.customer.city}
                        </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <OrdersList orders={[]} />
                </section>
            </React.Fragment>
            );
        }}
    </Query>
);

export default CustomerDetails;
