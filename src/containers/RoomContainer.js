import React, { Component } from "react"
import { Flex, Box, Button } from "rebass"

class RoomContainer extends Component {
  render() {
    return (
      <Flex column alignItems="center" justifyContent="center">
        <Flex wrap>{this.props.children}</Flex>
        <Flex>
          <Box alignSelf="center" justifySelf="center" w={1} p={2}>
            <Button alignSelf="center" justifySelf="center">
              Submit
            </Button>
          </Box>
        </Flex>
      </Flex>
    )
  }
}

export default RoomContainer
