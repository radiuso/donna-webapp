import React from 'react'
import moment from 'moment'
import gql from 'graphql-tag'
import QueryComponent from '../../components/QueryComponent'
import Icon from '../../components/Icon'
import OrderItem from '../../components/OrderItem'
import DatePicker from '../../components/DatePicker'

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
            date: moment().format('YYYY-MM-DD'),
        },
        currentDate: moment(),
    }

    constructor(props) {
        super(props);
        this.datePicker = React.createRef();
    }

    renderData({ ordersFor }) {
        return (
            <React.Fragment>
                <div className="navbar level">
                    <div className="level-left">
                        <div className="level-item has-text-centered subtitle is-3">
                            <span className="has-text-primary has-margin-right-10">
                                { this.state.currentDate.format('DD MMMM YYYY') }
                            </span>
                            <button className="button is-primary is-inverted"
                                onClick={() => this.showDatePicker()}
                            >
                                <Icon icon="calendar-alt" />
                            </button>
                        </div>
                    </div>
                    <div className="level-right">

                    </div>
                </div>

                <DatePicker
                    ref={this.datePicker}
                    onDayChange={(day) => this.onDayChange(day)}
                />

                <div>
                    {ordersFor.map(order => (
                        <OrderItem order={order} key={order.id} />
                    ))}
                </div>
            </React.Fragment>
        );
    }

    showDatePicker() {
        this.datePicker.current.show();
    }

    onDayChange(day) {
        this.setState({
            currentDate: day,
            variables: {
                date: day.format('YYYY-MM-DD'),
            },
        })
    }
}

export default OrdersListView
