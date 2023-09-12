import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Latest from "./Pages/Latest";
import PL from "./Pages/PL";
import Fantasy from "./Pages/Fantasy";
import Stats from "./Pages/Stats";
import More from "./Pages/More";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Latest />} />
        <Route path="/pl" element={<PL />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
