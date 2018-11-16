import React from 'react'
import { format } from 'date-fns'
import gql from 'graphql-tag'

import QueryComponent from '../../components/QueryComponent'
import Icon from '../../components/Icon'
import OrderItem from '../../components/OrderItem'

class OrdersListView extends QueryComponent {
    query = gql`
        query Orders($date: Date!) {
            ordersFor(date: $date) {
                id,
                status,
                targetDate,
                customer {
                    firstName,
                    lastName,
                    id
                }
            }
        }
    `

    state = {
        variables: {
            date: format(new Date(), 'YYYY-MM-DD'),
        },
        currentDate: Date.now(),
    }

    renderData({ ordersFor }) {
        return (
            <React.Fragment>
                <div className="navbar level">
                    <div className="level-left">
                        <div className="level-item has-text-centered subtitle is-3">
                            <span className="has-text-primary has-margin-right-10">
                                { format(this.state.currentDate, 'DD MMMM YYYY') }
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

                <div>
                    {ordersFor.map(order => (
                        <OrderItem order={order} key={order.id} />
                    ))}
                </div>
            </React.Fragment>
        );
    }

    goToOrder(order) {
        console.log(order);
    }
}

export default OrdersListView
