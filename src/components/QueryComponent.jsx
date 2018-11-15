import React, { Component } from 'react'
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

class QueryComponent extends Component {
    query = null

    render() {
        if (this.query !== null) {
            return (
                <Query query={this.query}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return this.renderData(data);
                    }}
                </Query>
            );
        }

        return null;
    }

    renderData(data) {
        return data
    }
}

QueryComponent.propTypes = {
    children: PropTypes.node,
}

export default QueryComponent
