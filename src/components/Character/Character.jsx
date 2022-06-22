import React from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import './Character.css';
import { useParams } from 'react-router-dom'

export default function Character() {
    const { id } = useParams()

    const { data, loading, error } = useCharacter(id);

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    return (
        <div className='Character'>
            <img src={data.character.image}
                width={450}
                height={450}
                alt='Character'
            />
            <div className='Character-content'>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className='Character-episode'>
                    {data.character.episode.map(episode => {
                        return <div>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
