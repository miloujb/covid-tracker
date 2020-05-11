import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./Components/index";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Covid Tracker</h1>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
