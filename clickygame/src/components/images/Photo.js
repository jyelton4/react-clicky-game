import React from "react";

const Photo = props => {

    const styles = {
        photo: {
            width: 170,
            height: 170,
            cursor: "pointer",
            backgroundImage: "url("+props.url+")",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            margin: "8px 25px",
            border: "5px solid #f1f1f1"
        }
    }

    return <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6"
    style={styles.photo}
    role="img">
    </div>

};

export default Photo;