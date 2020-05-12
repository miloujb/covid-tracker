import React from "react";
import { Cards, Chart, CountryPicker } from "./Components/index";
import { fetchData } from "./API/index";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>Covid Tracker</h1>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
