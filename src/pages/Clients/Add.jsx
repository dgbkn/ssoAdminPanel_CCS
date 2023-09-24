import { useState } from "react";
import { fetchData } from "../../apiConfig";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input, Button, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/react";
import toast from "react-hot-toast";
import MultiInput from "../../components/Forms/MultiInput";

export default function AddClient() {
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);
  const [callbacks, setCallbacks] = useState([""]);

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
      "createClient",
      "POST",
      {
        ClientDomain,
        ClientEmail,
        ClientName,
      },
      token
    );

    if (data.status == "success") {
      for (var i = 0; i < callbacks.length; i++) {
        if(callbacks[i] == "") continue;
        await insertCallBack(data._id, callbacks[i]);
      }
      toast.success("Add Success");
      navigate("/clients");
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  };

  return (
    <center>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "40%" }}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" placeholder="Name" />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>Client Domain</FormLabel>
          <Input name="Domain" type="text" placeholder="Client Domain" />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>Client Email</FormLabel>
          <Input name="Email" type="email" placeholder="Client Email" />
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
    </center>
  );
}
