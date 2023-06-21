// Libraries imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages imports
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Timer from "./pages/Timer";
import Badges from "./pages/Badges";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/badges" element={<Badges />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
