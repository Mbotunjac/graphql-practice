import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_lOCATION = gql`
query GetCharacterLocation($name: String!){
  characters(filter: {
    name: $name
  }) {
    results {
      location {
			name
      }
    }
  }
}
`;

export default function Search() {
  const [name, setName] = useState('');

  const [getLocation, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_lOCATION, {
    variables: {
      name
    }
  })

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocation()}>Search</button>
      {loading && 'Loading...'}
      {error && 'something went worng'}
      {called}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
