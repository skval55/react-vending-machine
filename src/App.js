import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Chips from "./Chips";
import Soda from "./Soda";
import Cabbage from "./Cabbage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/cabbage" element={<Cabbage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
