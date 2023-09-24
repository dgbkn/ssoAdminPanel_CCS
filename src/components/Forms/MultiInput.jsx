import {
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";

export default function MultiInput({name = "",fields = [""],setFields = () => {}}) {
//   const [fields, setFields] = useState(initialFeilds);

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleRemoveField = (index) => {
    const filteredFields = fields.filter((_, i) => i !== index);
    setFields(filteredFields);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      {fields.map((field, index) => (
        <div key={index}>
          <FormControl isRequired>
            <FormLabel>{name}</FormLabel>
            <Input 
              width={"80%"}
              defaultValue={field}
              placeholder={name}
              onChange={(e) => {
                const updatedFields = [...fields];
                updatedFields[index] = e.target.value;
                setFields(updatedFields);
              }}
            />

            <IconButton
              mt={"-0.25rem"}
              ml={'0.25rem'}
              onClick={() => handleRemoveField(index)}
            >
              <FiDelete />
            </IconButton>
          </FormControl>
        </div>
      ))}
      <Button variant="outline" onClick={handleAddField} sx={{ mt: 2 }}>
        Add {name}
      </Button>
    </Container>
  );
}
