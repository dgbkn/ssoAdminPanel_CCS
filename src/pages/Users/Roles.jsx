import { useEffect, useState } from "react";
import { fetchData } from "../../apiConfig";
import { Button, Flex, HStack, Spinner, VStack } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function UserRoles() {
  var {id} = useParams();
  const [data, setData] = useState(null);
  const [token, setToken] = useLocalStorage("token", null);

  const dataLao = async () => {
    const fetch = await fetchData("getClients", "GET", {}, token);
    setData(fetch);
  };

  useEffect(() => {
    dataLao();
  }, []);

  return (
    <>
      <Flex flexWrap={"wrap"}>
        {data &&
          data.clients.map((client) => {
            return (
              <div key={client._id}>
                <Link to={`/users/${id}/roles/${client._id}`}>
                <Card ml={10} mr={20} mb={2} w={"95%"}>
                  <CardHeader>
                    <Heading size="sm">{client.ClientName}</Heading>
                  </CardHeader>
                </Card>
                </Link>
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
