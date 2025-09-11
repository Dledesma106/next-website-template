import { authZEnvelopPlugin } from '@graphql-authz/envelop-plugin';
import { createYoga } from 'graphql-yoga';

import { schema } from '../../../../backend/schema';
import { authzRules } from '../../../../backend/schema/authz-rules';

const yoga = createYoga({
    schema: schema,
    graphqlEndpoint: '/api/graphql',
    plugins: [authZEnvelopPlugin({ rules: authzRules })],
    graphiql: process.env.NODE_ENV !== 'production',
    landingPage: false,
});

export async function GET(request: Request) {
    return yoga(request);
}

export async function POST(request: Request) {
    return yoga(request);
}
