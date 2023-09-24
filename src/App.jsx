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
import Clients from "./pages/Clients";

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    async function verifyToken() {
      if(token){
        var verify = await fetchData("verify", "GET", {}, token);
        if(verify.status == 'error'){
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
