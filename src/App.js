import React, {useEffect, useState} from "react";
import Api from "./api";

import Main from "./Pages/Main";

function App() {

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.getQuestions(10);
    }

    loadApi();
  }, []);

  return (
    <Main />
  );
}

export default App;
