import React, {Fragment, Component} from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import FavList from "../album-list/indexfav";
import Header from "../header";



class Favorites extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <FavList />
            </Fragment>
        )
    }
}

export default Favorites;
