import React, { Component } from "react"
import { Flex, Provider, Container } from "rebass"

import Room from "./components/Room"
import RoomContainer from "./containers/RoomContainer"

import { connect } from "react-redux"
import { toggleRoom, updateAdult, updateChildren } from "./actions/room-actions"

class App extends Component {
  render() {
    return (
      <Provider>
        <Flex flexDirection="row">
          <Container w={1} p={2}>
            <RoomContainer>
              {this.props.rooms.map((room, index) => {
                return (
                  <Room
                    key={index}
                    room={index + 1}
                    adult={room.adult}
                    children={room.children}
                    enabled={room.enabled}
                    defaults={this.props.defaults}
                    toggleRoom={this.props.onToggleRoom}
                    updateAdult={this.props.onUpdateAdult}
                    updateChildren={this.props.onUpdateChildren}
                  />
                )
              })}
            </RoomContainer>
          </Container>
        </Flex>
      </Provider>
    )
  }
}

const mapStateToProps = ({ room, defaults }) => ({
  rooms: room,
  defaults: defaults
})

const mapActionsToProps = {
  onToggleRoom: toggleRoom,
  onUpdateAdult: updateAdult,
  onUpdateChildren: updateChildren
}

export default connect(mapStateToProps, mapActionsToProps)(App)
