import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";


class Selector extends Component{
    render () {
        const { albumId } = this.props;
        return (
            <div className="header-container">
                <DropdownButton id="dropdown-basic-button" title="Choose Album">
                    <Dropdown.Item>
                        <Link to={`/album/${albumId}`}>
                            Album 1
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to={`/album/2`}>
                            Album 2
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to={`/album/3`}>
                            Album 3
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to={`/album/4`}>
                            Album 4
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to={`/album/5`}>
                            Album 5
                        </Link>
                    </Dropdown.Item>

                </DropdownButton>
            </div>
        )
    }

}

export default Selector;
