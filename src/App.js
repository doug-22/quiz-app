import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom"

import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Report from "./Pages/Report";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/report" element={<Report />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
