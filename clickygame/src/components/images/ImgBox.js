import React, { Component } from "react";

import PhotoFrame from "./PhotoFrame";

const styles = {
    ul: {
        padding: "0 0 0 0",
        margin: "0 0 0 0",
    }
}

class ImgBox extends Component {

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

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    render() {
        return <div className="row">
            {this.state.results.map( photoLink => 
                <PhotoFrame key={this.state.results.indexOf(photoLink)} url={photoLink} style={styles.ul} />)}
            </div>
    }

};

export default ImgBox;
