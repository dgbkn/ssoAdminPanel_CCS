import { useEffect, useState } from "react";
import { fetchData } from "../../apiConfig";
import { Button, Flex, HStack, Spinner, VStack } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UserProfile from "../../components/User/UserProfile";

export default function Users() {
  const [data, setData] = useState(null);
  const [dataC, setDataC] = useState(null);
  const [token, setToken] = useLocalStorage("token", null);
  //   const [delLoading, setdelLoading] = useState(false);

  const dataLao = async () => {
    const fetch = await fetchData("getUsers", "GET", {}, token);
    setData(fetch);
  };

  const dataLaoClients = async () => {
    const fetch = await fetchData("getClients", "GET", {}, token);
    setDataC(fetch);
  };

  //   const deleteClient = async (id) => {
  //     setdelLoading(true);
  //     const fetch = await fetchData("deleteClient/" + id, "POST", {}, token);
  //     if (fetch.status == "success") {
  //       toast.success("Delete Success");
  //       setData(null);
  //       dataLao();
  //     } else {
  //       toast.error(fetch.message);
  //     }
  //     setdelLoading(false);
  //   };

  useEffect(() => {
    dataLao();
    dataLaoClients();
  }, []);

  return (
    <>
      <Flex flexWrap={"wrap"}>
        {data && dataC &&
          data.users.map((client) => {
            return (
              <div key={client._id}>
                <UserProfile user={client} clients={dataC.clients} />
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
