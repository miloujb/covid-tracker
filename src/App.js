import React from "react";
import { Cards, Chart, CountryPicker } from "./Components/index";
import { fetchData } from "./API/index";
import styles from "./App.module.css";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Covid Tracker</h1>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
