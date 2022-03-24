import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import LandingPage from "./components/LandingPage/landingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
