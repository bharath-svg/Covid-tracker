import React from 'react'
import { Cards , CountryPick } from './components';
import styles from "./App.module.css"
import  {fetchData } from './api';



class App extends React.Component {
    state = {
        data:{},
        country:'',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
}

handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data:fetchedData });
  }

    render(){
        const {data} = this.state
    return (
        <div className={styles.container}>
            <h1>Covid-19 Tracker</h1>
            <Cards data={data} />
            <CountryPick handleCountryChange={this.handleCountryChange}  />
        </div>
    )
    }
}

export default App
