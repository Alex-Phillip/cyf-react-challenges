import React from 'react';
import BabyNamesData from "./babyNamesData.json";

function sortAlphabetically(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    };
};

const BabyNames = () => {
    return (
      <div>
        <ul>
          {BabyNamesData.sort(sortAlphabetically).map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
};

export default BabyNames;