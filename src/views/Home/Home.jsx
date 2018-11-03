import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const Home = () => (
  <Query query={gql`{
    version
  }`}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { version } = data;
      return (
        <div className="empty">
          <p className="empty-title h5">Welcome to Donna (using api v{version})</p>
          <p className="empty-subtitle">Please login to enjoy</p>
          <Link to="/auth/login" className="button">Login</Link>
        </div>
      );
    }}
  </Query>
)

export default Home;
