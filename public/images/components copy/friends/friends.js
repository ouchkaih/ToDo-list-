import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';


class Friends extends Component {
    constructor(props ){
        super(props);
        this.friends = [
            {image: "./fati.jpg", name :"fati flour"},
            {image: "./hijabi.jpg", name :"حجابي سر سعادتي"},
            {image: "./wydade.jpg", name :"dima wac"},
            {image: "./freefire.jpg", name :"المقاتل الشجاع"},
            {image: "./rajawi.jpg", name :"Rajawi"},
            {image: "./R.jpg", name :"عشير عشرانو مسطي عديانو"},
            


        ];
        this.new_friends =[ {image: "./fati.jpg", name :"fati flour"},
            {image: "./hijabi.jpg", name :"حجابي سر سعادتي"},
            {image: "./wydade.jpg", name :"dima wac"},
            {image: "./freefire.jpg", name :"المقاتل الشجاع"},
            {image: "./rajawi.jpg", name :"Rajawi"},
            {image: "./R.jpg", name :"عشير عشرانو مسطي عديانو"},]
    }
    render(){
        
        return (
            
            <div className="container pt-4 text-start  w-25 mt-3 pb-5 col-4">
                <h4 className="mb-4">Friends</h4>
                <div className="ms-4">
                    {
                        this.friends.map((frnd)=>(
                            <div className="pt-3">
                               <a href=""> <img src={frnd.image} alt="" className="img-rounded rounded-circle" width={"50px"} height={"50px"}/></a>
                                <spam className="friend_name ms-3">{frnd.name}</spam>

                            </div>
                        ))
                        
                    }
                    <hr/>





                    
                    {
                    this.new_friends.map((frnd)=>(
                            <div className="pt-3 d-flex justify-content-between align-items-center">
                                <div>
                                 <a href="#"><img src={frnd.image} alt="" className="img-rounded rounded-circle" width={"50px"} height={"50px"}/></a>
                                    <spam className="friend_name ms-3">{frnd.name}</spam>
                                </div>
                                <div>
                                    <button className="btn btn-primary p-1 m-0 add_new_friend ms-2" >add friend</button>
                                </div>

                            </div>
                        ))
                    
                    }             
                </div>
                
            </div>
        )
    }
}

export default Friends;