import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
