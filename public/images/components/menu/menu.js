import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css'


class Menu extends Component {
    render(){
        return (
            
            <div className="container pt-4 text-center w-25 bg-light mt-3  pb-5 col-3">
                <img src="./photo_2022-09-19_23-42-15 copy.png" alt="" className="img-rounded rounded-circle" width={"80px"} height={"80px"}/>
                <h6 className="user_name">Ouchkaih Ismail</h6>
                <div>
                    <ul className="navbar flex-column nav">
                        <li className="nav-item">
                            <a href="" className="nav-link navlink_menu">profile Edite</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link navlink_menu">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link navlink_menu">Languages</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link navlink_menu">Help & Sup</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link navlink_menu">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;