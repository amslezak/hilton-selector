import React, { Component } from "react"
import { Flex, Box, Button, Container } from "rebass"

class RoomContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Flex>{this.props.children}</Flex>
        <Flex justifyContent="center">
          <Container>
            <Box w={1}>
              <Button>Submit</Button>
            </Box>
          </Container>
        </Flex>
      </React.Fragment>
    )
  }
}

export default RoomContainer
