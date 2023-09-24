import { useEffect, useState } from "react";
import { fetchData } from "../../apiConfig";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input, Button, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/react";
import toast from "react-hot-toast";
import MultiInput from "../../components/Forms/MultiInput";

export default function ModifyClient() {
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);
  const [callbacks, setCallbacks] = useState([""]);
  const [oldData, setOldData] = useState(null);

  var { id } = useParams();

  async function fetchDataLao() {
    var data = await fetchData("getClient/" + id, "GET", {}, token);
    setOldData(data);
    setCallbacks(data.callbacks.map((call) => call.CallbackURL));
  }

  useEffect(() => {
    fetchDataLao();
  }, []);

  const navigate = useNavigate();

  const insertCallBack = async (cid, call) => {
    var data = await fetchData(
      "createCallbackUrl",
      "POST",
      {
        ClientID: cid,
        CallbackURL: call,
      },
      token
    );
    if (data.status == "success") {
      toast.success("Callback Added " + call);
    } else {
      toast.error(data.message);
    }
  };

  const deleteCallBack = async (id) => {
    var data = await fetchData(
      "deleteCallbackUrl/" + id,
      "POST",
      {},
      token
    );
    if (data.status == "success") {
      toast.success("Callback Deleted " + id);
    } else {
      toast.error(data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var ClientEmail = e.target.Email.value;
    var ClientName = e.target.name.value;
    var ClientDomain = e.target.Domain.value;

    if (ClientEmail == "" || ClientDomain == "" || ClientName == "") {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    var data = await fetchData(
      "updateClient/" + oldData.client._id,
      "POST",
      {
        ClientDomain,
        ClientEmail,
        ClientName,
      },
      token
    );

    if (data.status == "success") {
      for (var i = 0; i < oldData.callbacks.length; i++) {
        await deleteCallBack(oldData.callbacks[i]._id);
      }

      for (var k = 0; k < callbacks.length; k++) {
        if (callbacks[k] == "") continue;
        await insertCallBack(data._id, callbacks[k]);
      }
      toast.success("Modify Success");
      navigate("/clients");
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  };

  return (
    <center>
      {oldData && (
        <form onSubmit={(e) => handleSubmit(e)} style={{ width: "40%" }}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              defaultValue={oldData.client.ClientName}
              name="name"
              placeholder="Name"
            />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Client Domain</FormLabel>
            <Input
              defaultValue={oldData.client.ClientDomain}
              name="Domain"
              type="text"
              placeholder="Client Domain"
            />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Client Email</FormLabel>
            <Input
              defaultValue={oldData.client.ClientEmail}
              name="Email"
              type="email"
              placeholder="Client Email"
            />
          </FormControl>

          <MultiInput
            name={"Callback URL"}
            fields={callbacks}
            setFields={setCallbacks}
          />
          <Input type="submit" hidden />
          <br />
          <Button type="submit" colorScheme="yellow" variant="outline">
            {loading && <Spinner color="red.500" mb={-1.5} mr={1.5} />} Submit
          </Button>
        </form>
      )}

      {!oldData && <Spinner color="red.500" mb={-1.5} mr={1.5} size={"xl"} />}
    </center>
  );
}
