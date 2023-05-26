// Libraries imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components imports
import Navbar from "./components/Navbar";

// Pages imports
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Timer from "./pages/Timer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
        <Copyright />
      </Router>
    </>
  );
}

export default App;
