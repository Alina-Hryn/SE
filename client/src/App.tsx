import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@material-ui/core";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import { MovieCard } from "./components/MovieCard/MovieCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header tabValue={0} />
      </header>

      <body>
        <Main />
        <a className="title">Now playing in cinemas</a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15, 16, 17].map(
            () => (
              <MovieCard />
            )
          )}
        </div>
        <Button variant="contained" color="primary">
          VIEW ALL
        </Button>
      </body>
    </div>
  );
}

export default App;
