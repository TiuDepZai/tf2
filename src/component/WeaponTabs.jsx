import React, { useState } from 'react';
import './WeaponTabs.css';

const WeaponTabs = ({ character }) => {
  const [activeTab, setActiveTab] = useState('primary');

  // Function to switch between tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="weapon-tabs">
      {/* Tab selectors */}
      <div className="tab-headers">
        <button
          className={activeTab === 'primary' ? 'active' : ''}
          onClick={() => handleTabClick('primary')}
        >
          Primary Weapon
        </button>
        <button
          className={activeTab === 'secondary' ? 'active' : ''}
          onClick={() => handleTabClick('secondary')}
        >
          Secondary Weapon
        </button>
        <button
          className={activeTab === 'melee' ? 'active' : ''}
          onClick={() => handleTabClick('melee')}
        >
          Melee
        </button>
      </div>

      {/* Tab content */}


      <div className="tab-content">

      {activeTab === 'primary' && (
          <div className="weapon-list">
            {character.primary_weapon.map((weapon, index) => (
              <div key={index} className="weapon-details">
                <img src={weapon.image} alt={weapon.name} className="weapon-image" />
                <div className="weapon-description">
                  <h3>{weapon.name}</h3>
                  <p>{weapon.patch_notes}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'secondary' && (
            <div className="weapon-list">
                {character.secondary_weapons.map((weapon, index) => (
                <div key={index} className="weapon-details">
                    <img src={weapon.image} alt={weapon.name} className="weapon-image" />
                    <div className="weapon-description">
                    <h3>{weapon.name}</h3>
                    <p>{weapon.patch_notes}</p>
                    </div>
                </div>
                ))}
            </div>
        )}  

        {activeTab === 'melee' && (
          <div className="weapon-list">
            {character.melee.map((weapon, index) => (
              <div key={index} className="weapon-details">
                <img src={weapon.image} alt={weapon.name} className="weapon-image" />
                <div className="weapon-description">
                  <h3>{weapon.name}</h3>
                  <p>{weapon.patch_notes}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeaponTabs;
