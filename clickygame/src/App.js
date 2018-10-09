import React, { Component } from 'react';
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
    results: [],
    guessed: [],
    score: 0,
    topScore: 0
  };

  componentDidMount() {
      this.fetchPhotos();
  };

  fetchPhotos = () => {
      API.getPhotos()
        .then(res => this.setState({ results: res.data.message }))
        .catch(err => console.log(err));
  };

  handleScore = (childState) => {
    let guessed = this.state.guessed;
    let newScore = this.state.score + 1;
    if (guessed.indexOf(childState) === -1) {
      this.setState({ score: newScore });
      this.setState(prevState => ({
        guessed: [...prevState.guessed, childState]
      }))
    } else {
      this.setState({ topScore: this.state.score, score: 0 });
      this.forceUpdate();
    }
  };

  shuffleArray = event => {
    var array = this.state.results;
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ results: array });
  }
  
  render() {
    return <div className="container">
      <TopBar score={this.state.score} topScore={this.state.topScore} />
      <Banner />
      <main className="container" style={styles.main}>
        {this.state.results.map( photoLink => 
          <Photo key={this.state.results.indexOf(photoLink)} 
          url={photoLink} shuffleArray={this.shuffleArray}
          handleScore={this.handleScore}
          />)}
      </main>
      <BottomBar />
    </div>
  }
};

export default App;
