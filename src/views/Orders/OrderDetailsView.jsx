import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ProductsOrderList from '../../components/ProductsOrderList'
import OrderStatusBar from '../../components/OrderStatusBar'
import { getStatusLabel } from '../../services/order.service'

const QUERY_ORDER = gql`query Order($orderId: Int!) {
    order(id: $orderId) {
        id
        targetDate
        totalPrice
        status
        productsOrder {
            quantity
            unitPrice
            unit
            product {
                id
                label
                category
            }
        },
    }
}`

const OrderDetailsQuerier = (({ match }) => (
    <Query query={QUERY_ORDER} variables={{ orderId: match.params.id }}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            return <OrderDetails order={data.order} />
        }}
    </Query>
))

class OrderDetails extends Component {
    render() {
        const {order} = this.props

        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            <nav className="level">
                                <div className="level-item has-text-left">
                                    Order #{order.id} <OrderStatusBar status={order.status} /> { getStatusLabel(order.status) }
                                </div>
                                <div className="level-item">
                                    {order.totalPrice} €
                                </div>
                            </nav>
                        </h1>
                        <h2 className="subtitle">
                            {order.targetDate}
                        </h2>

                        <ProductsOrderList productsOrder={order.productsOrder} />
                    </div>
                </div>
            </section>
        )
    }
}

export default OrderDetailsQuerier
