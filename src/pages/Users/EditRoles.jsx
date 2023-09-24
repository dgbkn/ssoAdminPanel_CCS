import { useEffect, useState } from "react";
import { fetchData } from "../../apiConfig";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input, Button, Spinner, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import MultiInput from "../../components/Forms/MultiInput";

export default function EditRoles() {
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);
  const [callbacks, setCallbacks] = useState([""]);

  var { user, client } = useParams();

  async function fetchDataLao() {
    var data = await fetchData(
      `getClientRoles/${user}/${client}`,
      "GET",
      {},
      token
    );
    setCallbacks(data.roles);
  }

  useEffect(() => {
    fetchDataLao();
  }, []);

  const navigate = useNavigate();

  const insertCallBack = async (callbacks) => {
    var data = await fetchData(
      `addClientRoles/${user}/${client}`,
      "POST",
      {
        rolesToAdd: callbacks,
      },
      token
    );
    if (data.status == "success") {
      toast.success("Roles Added ");
    } else {
      toast.error(data.message);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await insertCallBack(callbacks);

    navigate("/users");

    setLoading(false);
  };

  return (
    <center>
      {callbacks != [""] && (
        <form onSubmit={(e) => handleSubmit(e)} style={{ width: "40%" }}>
          <MultiInput
            name={"Roles"}
            fields={callbacks}
            setFields={setCallbacks}
          />
          <Input type="submit" hidden />
          <br />
          <Button type="submit" colorScheme="purple" variant="outline">
            {loading && <Spinner color="red.500" mb={-1.5} mr={1.5} />} Submit
          </Button>
        </form>
      )}

      {callbacks == [""] && <Spinner color="red.500" mb={-1.5} mr={1.5} size={"xl"} />}
    </center>
  );
}
