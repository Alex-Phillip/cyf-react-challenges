import React from 'react';
import BabyNamesData from "./babyNamesData.json";

const BabyNames = () => {
    return (
      <div>
        <ul>
          {BabyNamesData.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
};

export default BabyNames;