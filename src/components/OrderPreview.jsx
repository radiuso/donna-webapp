import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import TimePicker from 'rc-time-picker';
import { OrderContext } from '../contexts/OrderContext';

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

    render() {
        return (
            <OrderContext.Consumer>
                {({ customer, products, targetDate, setTargetDate, setTargetHour }) => (
                    <React.Fragment>
                        <div className="field">
                            <label className="label">Client</label>
                            <div className="control">
                                <p>{customer ? `${customer.firstName} ${customer.lastName}`  : 'Aucun client'}</p>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Produits</label>
                            <div className="control">
                                {products ? displayProducts(products) : 'Aucun produit'}
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Date</label>
                            <div className="control">
                                <SingleDatePicker  orientation="vertical"
                                    withFullScreenPortal
                                    date={targetDate}
                                    focused={this.state.calendarFocused}
                                    onDateChange={setTargetDate}
                                    onFocusChange={(focused) => this.onFocusChange(focused)}
                                />
                                <TimePicker defaultValue={targetDate} showSecond={false} onChange={setTargetHour} />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </OrderContext.Consumer>
        )
    }
}

export default OrderPreview;
