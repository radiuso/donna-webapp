import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { SingleDatePicker } from 'react-dates'
import gql from 'graphql-tag'
import TimePicker from 'rc-time-picker'
import { OrderContext } from '../contexts/OrderContext'

const CREATE_ORDER = gql`
    mutation createOrder($targetDate: DateTime!, $status: Int!, $customerId: Int!, $products: [ProductsOrderInput!]!) {
        createOrder(order: {
            targetDate: $targetDate,
            status: $status,
            customerId: $customerId,
            products: $products
        }) {
            order {
                id,
                totalPrice,
            }
        }
    }
`

// TODO use apollo local resolver https://www.apollographql.com/docs/react/essentials/local-state.html
const normalizeOrder = (order) => {
    const targetDate = order.targetDate.toISOString()
    const status = 1
    const customerId = order.customer.id
    const products = []

    order.products.forEach(po => {
        if (po) {
            products.push({
                productId: po.product.id,
                quantity: po.quantity,
            })
        }
    })

    return {
        targetDate,
        status,
        customerId,
        products,
    }
}

const displayProducts = (products) => (
    products.map((productOrder) => {
        if (productOrder) {
            return (
                <p key={productOrder.product.id}>
                    {productOrder.product.label} {productOrder.quantity}
                </p>
            )
        }

        return null
    })
)

class OrderPreview extends Component {
    state = {
        calendarFocused: false,
    }
    onFocusChange({ focused }) {
        this.setState({calendarFocused: focused})
    }

    afterCreated(data) {
        console.log(data)
        this.props.history.push('/orders')
    }

    render() {
        return (
            <OrderContext.Consumer>
                {(order) => (
                    <Mutation mutation={CREATE_ORDER}
                        onCompleted={(data) => this.afterCreated(data)}
                    >
                    {(createOrder, { loading, error }) => (
                        <React.Fragment>
                            <div className="field">
                                <label className="label">Client</label>
                                <div className="control">
                                    <p>{order.customer ? `${order.customer.firstName} ${order.customer.lastName}`  : 'Aucun client'}</p>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Produits</label>
                                <div className="control">
                                    {order.products ? displayProducts(order.products) : 'Aucun produit'}
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Date</label>
                                <div className="control">
                                    <SingleDatePicker  orientation="vertical"
                                        withFullScreenPortal
                                        date={order.targetDate}
                                        focused={this.state.calendarFocused}
                                        onDateChange={order.setTargetDate}
                                        onFocusChange={(focused) => this.onFocusChange(focused)}
                                    />
                                    <TimePicker defaultValue={order.targetDate} showSecond={false} onChange={order.setTargetHour} />
                                </div>
                            </div>
                            <button className="button is-primary"
                                onClick={() => createOrder({
                                    variables: normalizeOrder(order),
                                })}
                            >Submit</button>
                        </React.Fragment>
                    )}
                    </Mutation>
                )}
            </OrderContext.Consumer>
        )
    }
}

export default withRouter(OrderPreview);
