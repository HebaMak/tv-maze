import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ContextProvider from "./hooks/context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <>
      <ContextProvider>
        <Routers>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Routers>
      </ContextProvider>
    </>
  );
}

export default App;
