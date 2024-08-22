import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { useState } from 'react';

import './App.css';
import { MainPerson, Persons } from './persons';

function App() {
  const { width, height } = useWindowSize();
  const [hasConfetti, setHasConfetti] = useState(true);

  return (
    <div className='app'>
      <div className='header'>
        <img
          className='main-character profile-image'
          src={MainPerson.image}
          alt={MainPerson.name}
        />
        {hasConfetti && <Confetti className='confetti' width={width} height={height} />}
        <h1>{MainPerson.header}</h1>
        <p>{MainPerson.description}</p>
        <button
          className='confetti-toggle'
          type='button'
          onClick={() => setHasConfetti(!hasConfetti)}
        >
          🎉
        </button>
      </div>
      <div className='messages'>
        {Persons.map((person) => (
          <div className='message' title={person.name}>
            <img className='profile-image' src={person.image} alt={person.name} />
            <p className='post'>{person.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
