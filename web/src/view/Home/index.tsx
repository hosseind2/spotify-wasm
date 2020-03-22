import React from "react";
import logo from "../../logo.svg";
import './style.scss';
import { useCrate, useTakeEffect } from "../../utils/hooks";

export const Home = () => {
  const mod = useCrate();
  const [response, setResponse] = React.useState();

  useTakeEffect(() => {
    const resp = mod.greet("Hello", ["from", "TypeScript"]);
    setResponse(resp);
  }, [mod]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
