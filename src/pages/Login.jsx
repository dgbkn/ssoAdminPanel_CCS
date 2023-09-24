import { Spinner, Stack } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ColorModeSwitcher } from "../components/Navbar/ColorModeSwitcher";
import toast, { Toaster } from "react-hot-toast";
import { fetchData } from "../apiConfig";
import { useState } from "react";

export default function Login() {
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user = e.target.username.value;
    var pass = e.target.password.value;

    if (user == "" || pass == "") {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    var data = await fetchData("login", "POST", {
      user,
      pass,
    });
    if (data.status == "success") {
      setToken(data.token);
      toast.success("Login Successful");
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
          <h2 className="mb-5 font-mono font-bold text-xl">Admin SSO</h2>
          <Toaster />

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              name="username"
              placeholder="Username"
              defaultValue=""
            />
            <input
              type="password"
              name="password"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="Password"
              defaultValue=""
            />
            <input type="submit" hidden />

            <button className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
              {loading && <Spinner color="red.500" mb={-1.5} mr={1.5} />} Log In
            </button>
          </form>
          <Stack spacing="1" mt={5}>
            <ColorModeSwitcher />
          </Stack>
        </div>
      </div>
    </div>
  );
}
