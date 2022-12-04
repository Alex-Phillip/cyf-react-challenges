import React from "react";
import BabyNamesData from "./babyNamesData.json";

const sortAlphabetically = (a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};

const BabyNames = () => {
  return (
    <div>
      <ul>
        {BabyNamesData.sort(sortAlphabetically).map(({ name, sex }) =>
          sex === "f" ? (
            <li key={name} className="f-names">
              {name}
            </li>
          ) : (
            <li key={name} className="m-names">
              {name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BabyNames;
