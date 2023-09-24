import { useEffect, useState } from "react";
import { fetchData } from "../apiConfig";
import { Button, HStack, Spinner, VStack } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Clients() {
  const [data, setData] = useState(null);
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    async function dataLao() {
      const fetch = await fetchData("getClients", "GET", {}, token);
      setData(fetch);
    }
    dataLao();
  }, []);

  return (
    <>
    <Link to={'/clients/add'}>
      <Button ml={10} colorScheme="teal" variant="outline">
        Add Client
      </Button>
      </Link>
      
      <br />
      <br />
      {data &&
        data.clients.map((client) => {
          return (
            <div key={client.id}>
              <Card ml={10} mr={10} w={"40%"}>
                <CardHeader>
                  <Heading size="md">Name : {client.ClientName}</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Client Email
                      </Heading>
                      <Text pt="1" fontSize="sm">
                        {client.ClientEmail}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Client Domain
                      </Heading>
                      <Text pt="1" fontSize="sm">
                        {client.ClientDomain}
                      </Text>
                    </Box>

                    <VStack alignSelf={"end"}>
                      <Button colorScheme="teal" variant="outline">
                        Edit
                      </Button>
                      <Button colorScheme="red" variant="solid">
                        Delete
                      </Button>
                    </VStack>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          );
        })}
      {!data && (
        <center>
          <Spinner color="red.500" mb={-1.5} mr={1.5} size={"xl"} />
        </center>
      )}
    </>
  );
}
