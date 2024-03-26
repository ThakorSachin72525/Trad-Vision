import React from 'react'
import { useColorMode, Switch, Flex, Button, IconButton } from '@chakra-ui/react' 
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Hamburger() {
    const { coloMode, toggleColorMode } = useColorMode()
    const isDark = coloMode === 'dark'
  return (
    <Flex>
        <Flex pos="fixed"
            top="1rem"
            right="1rem">
                <Flex></Flex>
        </Flex>
        <Switch
            color="green"
            isChecked={toggleColorMode}
        />
    </Flex>
  )
}

export default Hamburger