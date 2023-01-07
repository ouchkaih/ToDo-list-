import {React, Component} from "react";
import Posts from "./fcb_posts/posts";
import Friends from "./friends/friends";
import Menu from "./menu/menu";


class Contant extends Component {
    render(){
        return (
            <div className=" d-flex">
                <Menu/>
                <Posts/>
                <Friends/>
            </div>
        )
    }
}

export default Contant;