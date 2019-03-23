import React, { Component } from "react";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    const bio = this.props.character;
    if (!this.state.expanded) {
      return (
        <button className="btn-open" onClick={this.open}>Bio</button>
      );
    }
  }
}

export default Character;
