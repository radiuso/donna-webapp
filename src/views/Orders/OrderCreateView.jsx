import React, { Component } from 'react'
import classnames from 'classnames'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { OrderContext } from '../../contexts/OrderContext';
import Icon from '../../components/Icon'
import CustomersList from '../../components/CustomersList/CustomersList';
import OrderPreview from '../../components/OrderPreview';

const FIRST_STEP = 1
const LAST_STEP = 3

const QUERY = gql`{
    customers {
        id,
        firstName,
        lastName,
        city
    }
}`;
class OrderCreateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            order: {
                customer: null,
                products: [],
                targetDate: null,
            }
        }
    }

    nextStep() {
        if (this.state.currentStep < LAST_STEP) {
            this.setStep(this.state.currentStep + 1)
        }
    }

    prevStep() {
        if (this.state.currentStep > FIRST_STEP) {
            this.setStep(this.state.currentStep - 1)
        }
    }

    setStep(step) {
        this.setState({
            currentStep: step,
        })
    }

    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    const { customers } = data;
                    return (
                        <OrderContext.Provider value={this.state.order}>
                            { this.renderData(customers) }
                        </OrderContext.Provider>
                    );

                }}
            </Query>
        )
    }

    renderData(customers) {
        const { currentStep } = this.state

        return (
            <div className="columns">
                <div className="column content-column has-light-bg is-three-quarters">
                    <ul className="steps has-content-centered">
                        <li className={classnames({
                            'steps-segment': true,
                            'is-active': currentStep === 1,
                        })}
                            onClick={() => this.setStep(1)}
                        >
                            <span className="steps-marker">
                                <Icon icon="user" />
                            </span>
                            <div className="steps-content">
                                <p>Client</p>
                            </div>
                        </li>
                        <li className={classnames({
                            'steps-segment': true,
                            'is-active': currentStep === 2,
                        })}
                            onClick={() => this.setStep(2)}
                        >
                            <span className="steps-marker">
                                <Icon icon="cart-arrow-down" />
                            </span>
                            <div className="steps-content">
                                <p>Produits</p>
                            </div>
                        </li>
                        <li className={classnames({
                            'steps-segment': true,
                            'is-active': currentStep === 3,
                        })}
                            onClick={() => this.setStep(3)}
                        >
                            <span className="steps-marker">
                                <Icon icon="check" />
                            </span>
                            <div className="steps-content">
                                <p>Validation</p>
                            </div>
                        </li>
                    </ul>
                    <div className="step-content">
                        { this.renderCurrentStep(customers) }
                    </div>
                    <div className="level">
                        <div className="level-left">
                            <button className="button is-rounded" onClick={() => this.prevStep()}>Précédent</button>
                        </div>
                        <div className="level-right">
                            <button className="button is-rounded" onClick={() => this.nextStep()}>Suivant</button>
                        </div>
                    </div>
                </div>
                <div className="column content-column">Récap
                        <OrderPreview />
                </div>
            </div>
        )
    }

    renderCurrentStep(customers) {
        const { currentStep } = this.state

        switch(currentStep) {
            case 1:
                return (<CustomersList customers={customers} onSelected={(c) => this.onCustomerSelected(c)} />)
            case 2:
                return "2"
            default:
                return "3"
        }
    }

    onCustomerSelected(customer) {
        // update immutable helper ?
        const order = Object.assign({}, this.state.order, {
            customer,
        });

        if (customer) {
            this.setState({
                currentStep: 2,
                order,
            })
        }
    }
}

export default OrderCreateView
