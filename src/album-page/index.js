import React, { Fragment} from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import Header from "../header";
import data from "../data";

const AlbumPage = (props) => {
    const album = data.filter((albumId) => {
        return albumId.id === props.match.params.id;
    })[0];

    return (
        <Fragment>
            <Header />

            <div className="product-title">
                <div>
                    <img src={props.thumbnailUrl} alt={props.title} className="img-thumbnail" />

                </div>
                <div>
                    <br/>
                    <button className="btn btn-danger">
                        Add to favorites
                    </button>
                    <p>
                        <span className="product-brand">Id : {props.id}</span>
                    </p>
                    <p>
                        <span className="product-title">Title - {props.title}</span>
                    </p>
                    <p className="product-price">
                        AlbumId: {props.albumId}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default AlbumPage;
