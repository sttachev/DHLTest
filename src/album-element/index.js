import React, {Component} from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



class AlbumElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {isOpen} = this.state;
        const { url, title, id, albumId, thumbnailUrl } = this.props;
            return (
                <div className="product-title">
                    <div>
                    <img src={thumbnailUrl} alt={title} className="img-thumbnail" onClick={() => this.setState({ isOpen: true })} />
                        {isOpen && (
                            <Lightbox
                                mainSrc={url}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                            />
                        )}
                    </div>
                    <div>
                        <br/>
                        <button className="btn btn-danger">
                            Add to favorites
                        </button>
                        <p>
                            <span className="product-brand">Id : {id}</span>
                        </p>
                        <p>
                            <span className="product-title">Title - {title}</span>
                        </p>
                        <p className="product-price">
                            AlbumId: {albumId}
                        </p>
                    </div>
                </div>
            )
    }
}

export default AlbumElement;
