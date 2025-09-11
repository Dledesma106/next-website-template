import { GraphQLClient } from 'graphql-request';

// Ensure we have a valid URL
const getEndpoint = () => {
    if (process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
        return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
    }
    
    if (typeof window !== 'undefined') {
        return `${window.location.origin}/api/graphql`;
    }
    
    return 'http://localhost:3000/api/graphql';
};

const endpoint = getEndpoint();

console.log('GraphQL endpoint:', endpoint);

export const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
    },
});

// Client with authentication
export const createAuthenticatedClient = (token: string) => {
    return new GraphQLClient(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};
