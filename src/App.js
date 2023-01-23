import React from "react";
import logo from "./logo.svg";

import { P } from "./patterns/atoms/Texts";
import "./App.css";
import { PrimaryButton } from "./patterns/atoms/Buttons";

function App() {
  return (
    <main className="container">
      <header className="flex justify-between ">
        <div>
          <img src={logo} className="h-10 w-12" alt="logo" />
        </div>
        {/* <Header /> */}
        <div className="text-white flex items-center justify-evenly gap-9 mt-8">
          {/* About */}
          <div>
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
          </div>

          {/* Skills */}
          <div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <P fontSize="16px" className="capitalize">
                Skills
              </P>
            </a>
          </div>

          {/* Portfolio */}
          <div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <P fontSize="16px" className="capitalize">
                Portfolio
              </P>
            </a>
          </div>

          {/* Work */}
          <div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <P fontSize="16px" className="capitalize">
                Work
              </P>
            </a>
          </div>

          {/* Testimonials */}
          <div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <P fontSize="16px" className="capitalize">
                Testimonials
              </P>
            </a>
          </div>

          <div>
            <PrimaryButton bg="#1A8B9D" w="150px">
              CONTACT
            </PrimaryButton>
          </div>
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
