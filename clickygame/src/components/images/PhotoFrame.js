import React from "react";
import Photo from "./Photo";

const styles = {
    photoFrame: {
        height: 170,
        width: 170
    }
}

const PhotoFrame = props => (

    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6" style={styles.photoFrame}>
        <Photo url={props.url} />
    </div>

);

export default PhotoFrame;