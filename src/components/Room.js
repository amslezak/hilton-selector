import React, { Component } from "react"
import { Label, Box, Text, Select } from "rebass"

const RoomWrapper = Box.extend`
  background: ${props => (props.enabled ? "#E7E7E7" : "white")};
  border: 4px solid #e7e7e7;
  border-radius: 5px;
`

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.onToggleRoom = this.onToggleRoom.bind(this)
    this.onUpdateAdult = this.onUpdateAdult.bind(this)
    this.onUpdateChildren = this.onUpdateChildren.bind(this)
  }

  onToggleRoom(event) {
    return this.props.toggleRoom(
      this.props.room,
      event.target.checked,
      this.props.defaults
    )
  }

  onUpdateAdult(event) {
    return this.props.updateAdult(this.props.room, event.target.value)
  }

  onUpdateChildren(event) {
    return this.props.updateChildren(this.props.room, event.target.value)
  }

  render() {
    return (
      <Box w={[1, 1 / 2, 1 / 4]}>
        <RoomWrapper enabled={this.props.enabled} p={0} m={2}>
          <Box bg="#E7E7E7" p={3}>
            <Label color={this.props.enabled ? "black" : "gray3"}>
              <input
                checked={this.props.enabled}
                type="checkbox"
                onClick={this.onToggleRoom}
              />
              Room {this.props.room}
            </Label>
          </Box>
          <Box p={3}>
            <Text color={this.props.enabled ? "black" : "gray2"} p={1}>
              Adults (18+)
            </Text>
            <Select
              value={this.props.adult}
              disabled={!this.props.enabled}
              my={2}
              onChange={this.onUpdateAdult}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
            <Text color={this.props.enabled ? "black" : "gray2"} p={1}>
              Children (0-17)
            </Text>
            <Select
              onChange={this.onUpdateChildren}
              value={this.props.children}
              disabled={!this.props.enabled}
              my={2}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
            <Text />
          </Box>
        </RoomWrapper>
      </Box>
    )
  }
}
