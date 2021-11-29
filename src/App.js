import React, {useEffect, useState} from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom"
import Api from "./api";

import Main from "./Pages/Main";
import Home from "./Pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
