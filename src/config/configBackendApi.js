import ApolloClient from 'apollo-boost';

import { getToken } from '../services/auth.service';

const configBackEndApi = () => {
    return new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        request: async operation => {
            const token = await getToken();

            operation.setContext({
                headers: {
                    authorization: token ? `${token}` : ''
                }
            });
        }
    });
};

export default configBackEndApi;
