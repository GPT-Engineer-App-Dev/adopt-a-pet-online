import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AdoptionRequest from "./pages/AdoptionRequest.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/adoption-request" element={<AdoptionRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
