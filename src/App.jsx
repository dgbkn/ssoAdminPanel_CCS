import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { fetchData } from "./apiConfig";
import Clients from "./pages/Clients/Clients";
import AddClient from "./pages/Clients/Add";
import ModifyClient from "./pages/Clients/Modify";
import Users from "./pages/Users/Users";
import UserRoles from "./pages/Users/Roles";
import EditRoles from "./pages/Users/EditRoles";

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    async function verifyToken() {
      if (token) {
        var verify = await fetchData("verify", "GET", {}, token);
        if (verify.status == "error") {
          setToken(null);
        }
      }
    }
    verifyToken();
  }, [token, setToken]);

  return token ? (
    <>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Layout element={<Home />} label={"Home"} />}
            ></Route>
            <Route
              exact
              path="/clients"
              element={<Layout element={<Clients />} label={"Clients"} />}
            ></Route>

            <Route
              exact
              path="/clients/add"
              element={<Layout element={<AddClient />} label={"Add Client"} />}
            ></Route>

            <Route
              exact
              path="/clients/edit/:id"
              element={
                <Layout element={<ModifyClient />} label={"Modify Client"} />
              }
            ></Route>

            <Route
              exact
              path="/users"
              element={<Layout element={<Users />} label={"Users"} />}
            ></Route>

            <Route
              exact
              path="/users/roles/:id"
              element={<Layout element={<UserRoles />} label={"Select App"} />}
            ></Route>

            <Route
              exact
              path="/users/:user/roles/:client"
              element={<Layout element={<EditRoles />} label={"Change Roles"} />}
            ></Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  ) : (
    <>
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    </>
  );
}

export default App;
