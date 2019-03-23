import React, { Component } from "react";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.open = this.open.bind(this);
    this.close = this.open.bind(this);
  }
  open() {
    this.setState({ expanded: !this.state.expanded });
  }
  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const bio = this.props.character;
    if (!this.state.expanded) {
      return (
        <button className="btn-open" onClick={this.open}>Bio</button>
      );
    }
    return (
      <div>
        <button className="btn-close" onClick={this.close}>
          Hide Bio
        </button>
        <ul>
          <li>
            <p>
              <strong>Birth Year: {bio.birth_year}</strong>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong>Eye Color: {bio.eye_color}</strong>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong>Gender: {bio.gender}</strong>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong>Hair Color: {bio.hair_color}</strong>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong>Height: {bio.height}</strong>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <strong>Mass: {bio.mass}</strong>
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Character;
