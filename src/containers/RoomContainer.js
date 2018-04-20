import React, { Component } from "react";

class RoomContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: [0]
  };

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default RoomContainer;
