import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from './App.module.css';
import image from './images/logo.png';
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log('Data : ',fetchedData);
    this.setState({data : fetchedData})
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }


  render() {
    const {data,country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
