import React, { Component } from "react";
import { Flex, Box, Provider, Container } from "rebass";

import Room from "./components/Room";
import RoomContainer from "./containers/RoomContainer";

class App extends Component {
  constructor() {
    super();
    this.rooms = [1, 2, 3, 4];
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <Flex>
          <Container w={1} p={2}>
            <RoomContainer>
              {this.rooms.map((room, index) => {
                let enabled = false;
                if (index == 0) {
                  enabled = true;
                }

                return <Room room={room} key={index} enabled={enabled} />;
              })}
            </RoomContainer>
          </Container>
        </Flex>
      </Provider>
    );
  }
}

export default App;
