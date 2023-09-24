import { useEffect, useState } from "react";
import { fetchData } from "../../apiConfig";
import { Button, Flex, HStack, Spinner, VStack } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Clients() {
  const [data, setData] = useState(null);
  const [token, setToken] = useLocalStorage("token", null);
  const [delLoading, setdelLoading] = useState(false);

  const dataLao = async () => {
    const fetch = await fetchData("getClients", "GET", {}, token);
    setData(fetch);
  };
  const deleteClient = async (id) => {
    setdelLoading(true);
    const fetch = await fetchData("deleteClient/" + id, "POST", {}, token);
    if (fetch.status == "success") {
      toast.success("Delete Success");
      setData(null);
      dataLao();
    } else {
      toast.error(fetch.message);
    }
    setdelLoading(false);
  };

  useEffect(() => {
    dataLao();
  }, []);

  return (
    <>
      <Link to={"/clients/add"}>
        <Button ml={10} colorScheme="teal" variant="outline">
          Add Client
        </Button>
      </Link>

      <br />
      <br />
      <Flex flexWrap={"wrap"}>
        {data &&
          data.clients.map((client) => {
            return (
              <div key={client._id}>
                <Card ml={10} mr={20} mb={2} w={"95%"}>
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

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Client id
                        </Heading>
                        <Text pt="1" fontSize="sm">
                          {client._id}
                        </Text>
                      </Box>
                      

                      <VStack alignSelf={"end"}>
                        <Link to={`/clients/edit/${client._id}`}>
                        <Button colorScheme="teal" variant="outline">
                          Edit
                        </Button>
                        </Link>
                        <Button
                          onClick={() => deleteClient(client._id)}
                          colorScheme="red"
                          variant="solid"
                        >
                          {delLoading && (
                            <Spinner color="red.500" mb={-1.25} mr={1.5} />
                          )}{" "}
                          Delete
                        </Button>
                      </VStack>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </Flex>

      {!data && (
        <center>
          <Spinner color="red.500" mb={-1.5} mr={1.5} size={"xl"} />
        </center>
      )}
    </>
  );
}
