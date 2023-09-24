import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  VStack,
  Badge,
  Heading,
} from "@chakra-ui/react";

interface Role {
  clientId: string;
  role: string;
}

interface Client {
  _id: string;
  ClientName: string;
  // Other client fields...
}

interface User {
  name: string;
  email: string;
  googleId: string;
  profilePic: string;
  roles: Role[];
}

interface UserProfileProps {
  user: User;
  clients: Client[]; // Add clients as a prop
}

const UserProfile: React.FC<UserProfileProps> = ({ user, clients }) => {
  // Group roles by clientId
  const rolesByClientId: { [clientId: string]: string[] } = {};

  user.roles.forEach((role) => {
    if (!rolesByClientId[role.clientId]) {
      rolesByClientId[role.clientId] = [];
    }
    rolesByClientId[role.clientId].push(role.role);
  });

  return (
    <Container maxWidth="md" mt={8}>
      <Box border="1px" borderColor="gray.200" p={4} rounded="md">
        <Image src={user.profilePic} alt="Profile Picture" boxSize="96px" rounded="full" />
        <Text mt={4} fontWeight="bold" fontSize="xl">
          {user.name}
        </Text>
        <Text mt={2} color="gray.500">
          Email: {user.email}
        </Text>
        <Text mt={2} color="gray.500">
          Google ID: {user.googleId}
        </Text>
        <VStack mt={4} spacing={2}>
          {Object.keys(rolesByClientId).map((clientId) => (
            <Box key={clientId}>
              {clients.map((client) => {
                if (client._id === clientId) {
                  return (
                    <div key={client._id}>
                      <Text>Client Name: {client.ClientName}</Text>
                    </div>
                  );
                }
                return null;
              })}

              <Badge colorScheme="blue">
                {rolesByClientId[clientId].join(", ")}
              </Badge>
            </Box>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default UserProfile;
