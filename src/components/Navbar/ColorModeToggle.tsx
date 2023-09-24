import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import React from 'react'


export default function ColorModeToggle(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (

      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        className="mt-1 mr-2"
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
  );
}