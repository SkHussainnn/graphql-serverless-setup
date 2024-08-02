// src/resolvers.ts

import { IResolvers } from '@graphql-tools/utils'; // Updated import

const resolvers: IResolvers = {
  Query: {
    hello: () => 'Hello from Lambda!',
  },
};

export default resolvers;
