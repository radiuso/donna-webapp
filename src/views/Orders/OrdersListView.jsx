import React from 'react'
import { format } from 'date-fns'
import gql from 'graphql-tag'

import QueryComponent from '../../components/QueryComponent'
import Icon from '../../components/Icon'

class OrdersListView extends QueryComponent {
    query = gql`{
        orders {
            id,
            status,
            targetDate,
            customer {
                firstName,
                lastName,
                id
            }
        }
    }`

    state = {
        currentDate: Date.now(),
    }

    renderData({ orders }) {
        return (
            <React.Fragment>
                <div className="navbar level">
                    <div className="level-left">
                        <div className="level-item has-text-centered subtitle is-3">
                            <span className="has-text-primary has-margin-right-10">
                                { format(this.state.currentDate, 'MM/DD/YYYY') }
                            </span>
                            <button className="button is-primary is-inverted">
                                <Icon icon="calendar-alt" />
                            </button>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item has-text-centered subtitle is-3">
                            <button className="button is-text is-primary is-inverted">
                                <Icon icon="search" />
                            </button>
                            <button className="button is-text is-primary is-inverted">
                                <Icon icon="plus" />
                            </button>
                        </div>
                    </div>
                </div>

                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            { order.id } { format(order.targetDate, 'MM/DD/YYYY HH-mm') } - { order.customer.firstName } { order.customer.lastName }
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default OrdersListView
