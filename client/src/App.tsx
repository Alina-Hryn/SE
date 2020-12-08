import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@material-ui/core";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header tabValue={0} />
      </header>

      <body>
        <Button variant="contained" color="primary">
          Click
        </Button>
      </body>
    </div>
  );
}

export default App;
