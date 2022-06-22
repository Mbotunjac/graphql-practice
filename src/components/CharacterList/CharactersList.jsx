import { React } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import './CharacterList.css';
import { Link } from 'react-router-dom'



export default function CharactersList() {
  const { error, data, loading } = useCharacters();

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className='CharacterList'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="character" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
