import React, { Component } from 'react'
import { format } from 'date-fns'
import Icon from '../../components/Icon'

class OrdersListView extends Component {
    state = {
        currentDate: Date.now(),
    }

    render() {
        return (
            <div className="navbar level">
                <div className="level-item has-text-centered">
                    { format(this.state.currentDate, 'MM/DD/YYYY') }
                    <button className="button">
                        <Icon icon="calendar-alt" />
                    </button>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button">
                            <Icon icon="search" />
                        </button>
                        <button className="button">
                            <Icon icon="plus" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrdersListView
