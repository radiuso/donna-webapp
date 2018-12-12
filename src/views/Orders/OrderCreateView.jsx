import React, { Component } from 'react'
import classnames from 'classnames'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { OrderContext } from '../../contexts/OrderContext';
import Icon from '../../components/Icon'
import CustomersList from '../../components/CustomersList';
import OrderPreview from '../../components/OrderPreview';
import ProductsList from '../../components/ProductsList';


const QUERY = gql`{
    customers {
        id
        firstName
        lastName
        city
    },
    products {
        id
        label
        category
        unitPrice
        unit
    }
}`;
class OrderCreateView extends Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    return this.renderData(data)
                }}
            </Query>
        )
    }

    renderData(data) {
        return (
            <OrderContext.Consumer>
                { ({ currentStep, setStep, prevStep, nextStep }) => (
                    <div className="columns">
                    <div className="column content-column has-light-bg is-three-quarters">
                        <ul className="steps has-content-centered">
                            <li className={classnames({
                                'steps-segment': true,
                                'is-active': currentStep === 1,
                            })}
                                onClick={() => setStep(1)}
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
                                onClick={() => setStep(2)}
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
                                onClick={() => setStep(3)}
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
                            { this.renderStep(currentStep, data) }
                        </div>
                        <div className="level">
                            <div className="level-left">
                                <button className="button is-rounded" onClick={() => prevStep()}>Précédent</button>
                            </div>
                            <div className="level-right">
                                <button className="button is-rounded" onClick={() => nextStep()}>Suivant</button>
                            </div>
                        </div>
                    </div>
                    <div className="column content-column">
                        <OrderPreview />
                    </div>
                </div>
            )}
            </OrderContext.Consumer>
        )
    }

    renderStep(currentStep, {customers, products}) {
        switch(currentStep) {
            case 1:
                return (
                    <OrderContext.Consumer>
                        { ({ customer, setCustomer, setStep }) => (
                            <CustomersList
                                customers={customers}
                                onSelected={(c) => {
                                    setCustomer(c);
                                    setStep(2);
                                }}
                                selectedCustomer={customer}
                            />
                        )}
                    </OrderContext.Consumer>
                )
            case 2:
                return (
                    <OrderContext.Consumer>
                        {({ addProduct }) => (
                            <ProductsList
                                products={products}
                                onSelect={addProduct}
                            />
                        )}
                    </OrderContext.Consumer>
                )
            default:
                return <OrderPreview />
        }
    }
}

export default OrderCreateView
