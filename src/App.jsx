import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Navbar from "./components/navbar/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
