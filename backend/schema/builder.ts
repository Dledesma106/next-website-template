import SchemaBuilder from '@pothos/core';
import AuthzPlugin from '@pothos/plugin-authz';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '../generated/pothos';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import GraphQLJSON from 'graphql-type-json';

import { authzRules } from './authz-rules';
import { YogaContext } from './types';

import { prisma } from '../../lib/prisma';

export const builder = new SchemaBuilder<{
    Context: YogaContext;
    AuthZRule: keyof typeof authzRules;
    PrismaTypes: PrismaTypes;
    Scalars: {
        Date: {
            Input: Date;
            Output: Date;
        };
        DateTime: {
            Input: Date;
            Output: Date;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        JSON: { Input: any; Output: any };
    };
}>({
    plugins: [PrismaPlugin, AuthzPlugin],
    prisma: {
        client: prisma,
    },
});

builder.queryType({});
builder.mutationType({});
builder.addScalarType('Date', DateResolver, {});
builder.addScalarType('DateTime', DateTimeResolver, {});
builder.addScalarType('JSON', GraphQLJSON, {});
