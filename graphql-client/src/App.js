import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const EXAMPLE_QUERY = gql`
  query GetExample {
    exampleField
  }
`;

function YourComponent() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Data: {data.exampleField}</p>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <YourComponent />
    </ApolloProvider>
  );
}

export default App;
