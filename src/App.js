import React from "react";
import logo from "./logo.svg";

import { P } from "./patterns/atoms/Texts";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main
      className="container"
      // style={{ background: "#0D0B21" }}
    >
      <header className="flex justify-between">
        <div>
          <img src={logo} className="h-10 w-12" alt="logo" />
        </div>
        <div className="text-white flex justify-between">
          {/* <Link to=""> */}
          <P fontSize="16px" className="capitalize">
            About
          </P>
          {/* </Link> */}
          <div>
            <P>Skills</P>
          </div>
          <div>
            <P>Portfolio</P>
          </div>
          <div>
            <P>Work</P>
          </div>
          <div>
            <P>Testimonials</P>
          </div>
        </div>

        {/* <p className="text-red-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </main>
  );
}

export default App;
