import React, {Fragment, Component} from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import AllList from "../album-list/indexfav";
import Header from "../header";



class All extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <AllList />
            </Fragment>
        )
    }
}

export default All;
