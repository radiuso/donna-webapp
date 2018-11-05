import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrdersList = ({ orders }) => (
    <table className="table is-striped is-hoverable is-fullwidth">
        <tbody>
            { orders.map(order => (
                <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>
                        <Link to={`/orders/${order.id}`}>Détails</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

OrdersList.propTypes = {
    orders: PropTypes.array.isRequired,
};

export default OrdersList;
