import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import moment from 'moment'
import OrdersListView from './OrdersListView'
import OrderDetailView from './OrderDetailsView'
import OrderCreateView from './OrderCreateView'

import { OrderContext } from '../../contexts/OrderContext'

const FIRST_STEP = 1
const LAST_STEP = 3

// Register all routes for the orders part
class OrdersContainer extends Component {
    state = {
        currentStep: 1,
        customer: null,
        targetDate: null,
        products: [],
    }

    setCustomer = (customer) => {
        this.setState({ customer })
    }

    setTargetDate = (newTargetDate) => {
        const {targetDate} = this.state

        // keep minutes and seconds from hours setter
        if (targetDate) {
            newTargetDate.hours(targetDate.hours())
            newTargetDate.minutes(targetDate.minutes())
        }

        this.setState({ targetDate: newTargetDate })
    }
    setTargetHour = (targetHour) => {
        const {targetDate} = this.state

        if (!targetDate) {
            return this.setState({ targetDate: targetHour })
        }

        const ctargetDate = moment(targetDate);
        ctargetDate.hours(targetHour.hours())
        ctargetDate.minutes(targetHour.minutes())

        this.setState({ targetDate: ctargetDate })
    }

    addProduct = (product) => {
        console.log(product, this.state.products);
        if (product) {
            const products = [...this.state.products];
            // add qty to the product list
            if (!products[product.id]) {
                products[product.id] = {
                    product,
                    quantity: 0,
                }
            }

            products[product.id].quantity++;

            this.setState({
                products,
            })
        }
    }

    nextStep = () => {
        if (this.state.currentStep < LAST_STEP) {
            this.setStep(this.state.currentStep + 1)
        }
    }

    prevStep = () => {
        if (this.state.currentStep > FIRST_STEP) {
            this.setStep(this.state.currentStep - 1)
        }
    }

    setStep = (step) => {
        this.setState({
            currentStep: step,
        })
    }

    render() {
        const { match } = this.props
        const { customer, products, targetDate, currentStep } = this.state

        return (
            <OrderContext.Provider value={{
                customer,
                products,
                targetDate,
                setCustomer: this.setCustomer,
                setTargetDate: this.setTargetDate,
                setTargetHour: this.setTargetHour,
                addProduct: this.addProduct,

                currentStep,
                nextStep: this.nextStep,
                prevStep: this.prevStep,
                setStep: this.setStep,
            }}>
                <Switch>
                    <Route path={`${match.url}`} exact component={OrdersListView} />
                    <Route path={`${match.url}/create`} component={OrderCreateView} />
                    <Route path={`${match.url}/:id`} component={OrderDetailView} />
                </Switch>
            </OrderContext.Provider>
        )
    }
}

export default OrdersContainer
