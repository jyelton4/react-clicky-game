import React, { Component } from "react";

// const Photo = props => {

//     const styles = {
//         photo: {
//             width: 170,
//             height: 170,
//             cursor: "pointer",
//             backgroundImage: "url("+props.url+")",
//             backgroundSize: "cover",
//             backgroundPosition: "50%",
//             margin: "8px 25px",
//             border: "5px solid #f1f1f1"
//         }
//     }

//     return <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4"
//     style={styles.photo}
//     role="img"
//     onClick={props.shuffleArray}>
//     </div>

// };

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    };

    // componentDidUpdate = (prevProps) => {
    //     if (prevProps.url !== this.props.url) {
    //         this.mapStateToProps();
    //     }
    // };

    // mapStateToProps = () => {
    //     let photo = JSON.parse(JSON.stringify(this.state.photo));
    //     photo.backgroundImage = "url("+this.props.url+")";
    //     this.setState({ photo });
    // };

    handleClick(clickedPhoto) {
        this.props.handleScore(clickedPhoto.props.url);
        this.props.shuffleArray();
    };

    render() {
        let photo = {
                width: 170,
                height: 170,
                cursor: "pointer",
                backgroundImage: "url("+this.props.url+")",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                margin: "8px 25px",
                border: "5px solid #f1f1f1"
            }
        return <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4"
        style={photo}
        role="img"
        onClick={() => this.handleClick(this)}>
    </div>
    };

};

export default Photo;