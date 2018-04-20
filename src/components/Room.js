import React, { Component } from "react";
import { Label, Checkbox, Card, Box, Text, Select } from "rebass";
import styled from "styled-components";

const RoomWrapper = Box.extend`
  background: ${props => (props.enabled ? "#E7E7E7" : "white")};
  border: 4px solid #e7e7e7;
  border-radius: 5px;
`;

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.defaults = { adults: 1, children: 0 };
  }

  state = {
    enabled: true
  };

  toggleRoom() {
    this.setState({
      enabled: !this.state.enabled
    });
  }

  render() {
    return (
      <RoomWrapper enabled={this.props.enabled} p={0} m={2}>
        <Box bg="#E7E7E7" p={3}>
          <Label>
            <Checkbox onClick={this.toggleRoom.bind(this)} selected />
            Room {this.props.room}
          </Label>
        </Box>
        <Box p={3}>
          <Text p={1}>Adults (18+)</Text>
          <Select my={2} disabled={this.state.enabled}>
            <option>{this.state.enabled ? "0" : "1"}</option>
            <option>2</option>
          </Select>
          <Text p={1}>Children (0-17)</Text>
          <Select my={2} disabled={this.state.enabled}>
            <option>{this.state.enabled ? "0" : "0"}</option>
            <option>1</option>
            <option>2</option>
          </Select>
          <Text />
        </Box>
      </RoomWrapper>
    );
  }
}
