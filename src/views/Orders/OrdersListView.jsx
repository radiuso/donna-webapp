import React from 'react'
import moment from 'moment'
import gql from 'graphql-tag'
import { DayPicker } from 'react-dates'
import classnames from 'classnames'
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
        today: moment(),
    }

    constructor(props) {
        super(props);
        this.datePicker = React.createRef();
    }

    renderData({ ordersFor }) {
        return (
            <React.Fragment>
                <div className="columns orders">
                    <div className="column content-column">
                        <div className="has-text-centered subtitle is-3">
                            <button className="button is-primary is-inverted is-text"
                                onClick={() => this.showDatePicker()}
                            >
                                <Icon icon="calendar" />
                            </button>
                            <span className="has-text-primary has-margin-right-10">
                                { this.state.currentDate.format('DD MMMM YYYY') }
                            </span>
                        </div>
                        <div className="is-horizontally-centered">
                            <DayPicker
                                numberOfMonths={1}
                                onDayClick={(day) => this.onDayChange(day) }
                                renderDayContents={(day) => this.renderDayContents(day)}
                            />
                        </div>
                    </div>
                    <div className="column content-column has-light-bg">
                        <div className="has-text-centered subtitle is-3">
                            <span className="has-text-primary has-margin-right-10">
                                { ordersFor.length } Commandes
                            </span>
                        </div>
                        {ordersFor.map(order => (
                            <OrderItem order={order} key={order.id} />
                        ))}
                    </div>
                    <div className="column content-column">
                        <div className="has-text-centered is-5">
                            <span>Activités récentes</span>
                        </div>
                        <br />
                        <div className="info">
                            <p>Commande pour Mr Robert créée</p>
                            <p>3 articles</p>
                        </div>
                    </div>

                    <DatePicker
                        ref={this.datePicker}
                        onDayChange={(day) => this.onDayChange(day)}
                    />
                </div>
            </React.Fragment>
        );
    }

    showDatePicker() {
        this.datePicker.current.show()
    }

    onDayChange(day) {
        this.setState({
            currentDate: day,
            variables: {
                date: day.format('YYYY-MM-DD'),
            },
        })
    }

    renderDayContents(date) {
        const { today, currentDate } = this.state
        return (
            <span
                className={classnames({
                    'tag is-primary': today.isSame(date, 'days'),
                    'has-text-secondary': currentDate.isSame(date, 'days'),
                })}
            >
                {date.format('DD')}
            </span>
        );
    }
}

export default OrdersListView
