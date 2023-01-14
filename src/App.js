import React from "react";
import logo from "./logo.svg";

import { P } from "./patterns/atoms/Texts";
import "./App.css";
import { Header } from "./patterns/organisms/Headers";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <header className="flex justify-between ">
        <div>
          <img src={logo} className="h-10 w-12" alt="logo" />
        </div>
        <Header />
        <div className="text-white">
          <div>
            <Link to="">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <P fontSize="16px" className="capitalize">
                  About
                </P>
              </a>
            </Link>
          </div>

          {/* <div>
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
          </div> */}
        </div>
      </header>

      <p className="text-red-500">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </main>
  );
}

export default App;
