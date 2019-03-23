import React, { Component } from "react";
import Character from "./Character";

class CharactersList extends Component {
  render() {
    const starwarsChars = this.props.starwarsChars;
    return (
      <div className="">
        {starwarsChars.map(character => {
          return (
            <div key={character.url}>
              <h1 className="main-chars">{character.name}</h1>
              <Character character={character} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default CharactersList;
