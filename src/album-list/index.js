import React, { Fragment } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../data";
import AlbumElement from "../album-element";

const renderAlbums = (albums) => {
    return albums.map(album => {
        return (<AlbumElement key={album.albumId} {...album} />)
    })
}

const AlbumList = ({ albums }) => {
    return (
        <Fragment>
            <div className="container">
                <div className="product-title">
                    {renderAlbums(data)}
                </div>
            </div>
        </Fragment>
    )
}

export default AlbumList;


