import {React, Component} from 'react';
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fakebook.png"
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className=".container bg-light border border-bottom-3">
                <nav className="navbar navbar-light justify-content-between container">
                    <div>
                        <img src="./fakebook.png" alt="imgj" className='logo_img' />
                    </div>
                    <ul className="nav">
                        <li className="">
                        </li>
                        <li className="nav-item">
                            <a href="Home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="videos" className="nav-link">videos</a>
                        </li>
                        <li className="nav-item">
                            <a href="Feeds" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="Notification" className="nav-link">Notification</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}



export default Navbar;
