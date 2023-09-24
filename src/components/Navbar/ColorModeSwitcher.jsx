import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { NavButton } from './NavButton';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const navText = useColorModeValue("Dark Mode" , "Light Mode");
  return (
    <NavButton icon={SwitchIcon} label={navText} onClick={toggleColorMode}/>
  );
}