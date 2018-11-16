import React, { Component } from 'react'

class OrderDetails extends Component {
    render() {
        const id = this.props.match.params.id

        return (<p>Order {id}</p>)
    }
}

export default OrderDetails
