import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DayPicker } from 'react-dates'
import classnames from 'classnames'
import Icon from '../../components/Icon'
import './DatePicker.scss'

// TODO add current date (show in different style)
class DatePicker extends Component {
    state = {
        isHidden: true,
    }

    show() {
        this.setState({
            isHidden: false,
        })
    }

    hide() {
        this.setState({
            isHidden: true,
        })
    }

    onDayClick(day) {
        const { onDayChange } = this.props

        if (onDayChange) {
            onDayChange(day)
        }
        this.hide();
    }

    render() {
        const { isFullscreen, numberOfMonths } = this.props

        return (
            <div className={classnames({
                'date-picker': true,
                'date-picker--fullscreen': isFullscreen,
                'is-hidden': this.state.isHidden,
                'is-show': !this.state.isHidden,
            })}>
                <DayPicker
                    orientation="verticalScrollable"
                    withPortal
                    numberOfMonths={numberOfMonths}
                    hidden={false}
                    onDayClick={(day) => this.onDayClick(day) }
                />

                <button className="close-action button is-rounded"
                    onClick={() => this.hide()}
                >
                    <Icon icon="times" />
                </button>
            </div>
        )
    }
}

DatePicker.propTypes = {
    numberOfMonths: PropTypes.number,
    isFullscreen: PropTypes.bool,
    onDayChange: PropTypes.func,
}

DatePicker.defaultProps = {
    numberOfMonths: 12,
    isFullscreen: true,
}

export default DatePicker
