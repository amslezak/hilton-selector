import React, { Component } from "react"
import { Flex, Box, Button } from "rebass"

class RoomContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Flex>{this.props.children}</Flex>
        <Flex justifyContent="center">
          <Box w={1}>
            <Button>Submit</Button>
          </Box>
        </Flex>
      </React.Fragment>
    )
  }
}

export default RoomContainer
