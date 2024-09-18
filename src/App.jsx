import React, { useEffect, useState } from 'react';
import WeaponTabs from './component/WeaponTabs'; // Import the new component
import './App.css';

const App = () => {
  const [patchNotes, setPatchNotes] = useState([]);

  useEffect(() => {
    fetch('/patch.json')
      .then((response) => response.json())
      .then((data) => setPatchNotes(data))
      .catch((error) => console.error('Error fetching patch notes:', error));
  }, []);

  return (
    <div className="App">
      <h1>TF2 VSH Patch Notes</h1>
      <div className="patch-notes">
        {patchNotes.map((character, index) => (
          <div key={index} className="character">
            <h2 className="role-title">Role: {character.role}</h2>
            <img src={character.image} alt={character.role} className="character-image" />
            <WeaponTabs character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
