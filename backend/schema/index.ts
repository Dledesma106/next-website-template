import { builder } from './builder';
import './resolvers/city';
import './resolvers/user';
import './resolvers/blog';

export const schema = builder.toSchema();
