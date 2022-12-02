import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ContextProvider from "./hooks/context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import People from "./pages/People";
import Favorites from "./pages/Favorites";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShowDetails from "./pages/ShowDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ContextProvider>
        <Routers>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/show/:id" element={<ShowDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Routers>
      </ContextProvider>
    </>
  );
}

export default App;
