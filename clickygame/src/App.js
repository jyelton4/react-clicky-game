import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
// eslint-disable-next-line
import $ from 'jquery';
import './App.css';
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import BottomBar from "./components/BottomBar";
import API from "./utils/API";
import Photo from "./components/images/Photo";

const styles = {
  main: {
    display: "flex",
    minHeight: "80%",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto"
  }
}

class App extends Component {

  state = {
    results: []
  };

  componentDidMount() {
      this.fetchPhotos();
  };

  fetchPhotos = () => {
      API.getPhotos()
        .then(res => this.setState({ results: res.data.message }))
        .catch(err => console.log(err));
  };

  render() {
    return <div class="container">
      <TopBar />
      <Banner />
      <main class="container" style={styles.main}>
        {this.state.results.map( photoLink => 
          <Photo key={this.state.results.indexOf(photoLink)} 
          url={photoLink} 
          />)}
      </main>
      <BottomBar />
    </div>
  }
};

export default App;
