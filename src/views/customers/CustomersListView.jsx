import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const CUSTOMERS_QUERY = gql`{
    customers {
        id,
        firstName,
        lastName,
        phone,
        city
    }
}`;

const CustomersView = () => (
    <Query query={CUSTOMERS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            const { customers } = data;
            return (
                <React.Fragment>
                    <table className="table is-striped is-hoverable is-fullwidth">
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.firstName} {customer.lastName}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.city}</td>
                                    <td>
                                        <Link to={`/customers/${customer.id}`} className="button is-primary">Editer</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </React.Fragment>
            );
        }}
    </Query>
)

export default CustomersView;
