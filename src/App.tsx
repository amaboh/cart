import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Box mb="4" bgColor="gray.50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
    </>
    
  );
}

export default App;