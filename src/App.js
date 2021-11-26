import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components";

function App() {
  return (
    <div className="bg-gray-300">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
