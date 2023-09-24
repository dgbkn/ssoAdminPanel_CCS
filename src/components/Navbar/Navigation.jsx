import { NavButton } from "./NavButton";
// import Logo from "./Logo";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link } from "react-router-dom";

import { Flex, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FiBarChart2, FiHome, FiLogOut, FiUser } from "react-icons/fi";
import { useLocalStorage } from "@uidotdev/usehooks";

export function Navigation() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <>
      <Flex
        flex="1"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "3", sm: "4" }}
        px={{ base: "4", sm: "6" }}
      >
        <Stack justify="space-between" spacing="1" width="full">
          <Stack spacing="5" shouldWrapChildren>
            <Stack spacing="1">
              <HStack>
                <img
                  src="https://www.ccstiet.com/static/home/images/ccs_logo.png"
                  alt="CCS_LOGO"
                ></img>
              </HStack>

              <Link to="/">
                <NavButton label="Home" icon={FiHome} />
              </Link>

              <Link to="/clients">
                <NavButton
                  label="Clients"
                  icon={FiBarChart2}
                  aria-current="page"
                />
              </Link>

              
              <Link to="/users">
                <NavButton
                  label="Users"
                  icon={FiUser}
                  aria-current="page"
                />
              </Link>

            </Stack>

            <Stack>
              <Text fontSize="sm" color="subtle" fontWeight="medium">
                Settings
              </Text>
              <Stack spacing="1">
                <ColorModeSwitcher />
                <NavButton
                  label="Logout"
                  icon={FiLogOut}
                  onClick={() => setToken(null)}
                />{" "}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
