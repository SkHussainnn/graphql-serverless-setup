import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import mockData from './data.json'; // Imported the dummy data

const GET_DOCUMENTS = gql`
  query {
    documents {
      id
      title
      description
    }
  }
`;

const mocks = [
  {
    request: {
      query: GET_DOCUMENTS,
    },
    result: {
      data: mockData, // Displaying dummy data
    },
  },
];

function Page() {
  const { loading, error, data } = useQuery(GET_DOCUMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  return (
    <div>
      <h1>Documents</h1>
      {data.documents.map((doc) => (
        <div key={doc.id}>
          <h2>{doc.title}</h2>
          <p>{doc.description}</p>
        </div>
      ))}
    </div>
  );
}

function PageWithMocks() {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Page />
    </MockedProvider>
  );
}

export default PageWithMocks;
