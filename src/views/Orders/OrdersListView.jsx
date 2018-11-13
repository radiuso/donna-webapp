import React, { Component } from 'react'
import { format } from 'date-fns'
import Icon from '../../components/Icon'

class OrdersListView extends Component {
    state = {
        currentDate: Date.now(),
    }

    render() {
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
            </React.Fragment>
        );
    }
}

export default OrdersListView
