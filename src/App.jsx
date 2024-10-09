import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
    </>
  );
}

export default App;
