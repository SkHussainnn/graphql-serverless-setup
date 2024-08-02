import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { ApolloServer, gql } from 'apollo-server-lambda';

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers for your schema
const resolvers = {
  Query: {
    hello: () => 'Hello from Lambda!',
  },
};

// Create an ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Lambda handler function
//ts/@/ignore
export const graphql: any = async (event:any, context:any) => {
  const handler = server.createHandler();

  return new Promise((resolve, reject) => {
    handler(event, context, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else if (result) {
        resolve(result);
      } else {
        // Ensure to return a valid APIGatewayProxyResult if no result is available
        resolve({
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' }),
        });
      }
    });
  });
};
