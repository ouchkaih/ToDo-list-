import {React , Component} from 'react';
import './posts.css';
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';


class Posts extends Component{
    render(){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date_posted = new Date();
        let month= date_posted.getMonth().toString();
        let date = date_posted.getDate().toString();
        let hour= date_posted.getHours().toString();
        let minute= date_posted.getMinutes().toString();
        const postsd = [{poster_image: "./freefire.jpg", poster_name : "المقاتل الشجاع", image:"./freefire.jpg"},{poster_image: "./R.jpg", poster_name : "عشير عشرانو مسطي عديانو", image:"./hello.jpg"}]
        return(
           
                
                    <div className=' col-5  mt-3'>
                        {
                        postsd.map((user_post) =>(
                            <div className='bg-light pb-3 rounded-5 mb-4'>
                                <div className='p-4'>
                                    <img src={user_post.poster_image} alt="" className="img-rounded rounded-circle" width={"40px"} height={"40px"}/> <span>{user_post.poster_name}</span> <br />
                                    <h6 className='date_posted ms-5 '> {months[month]} {date} at {hour}:{minute}</h6>
                                </div>
                                <div className='post'>
                                    <img src={user_post.image} alt="" width={"100%"} height={"95%"} />
                                </div>
                                <div className='p-3 border-bottom d-flex justify-content-between'>
                                    <div>
                                        <span><img src="./icons8-like-64.png" alt="" width={'30px'} /> 100 </span>
                                    </div>
                                    <div>
                                        <span>90 Comments &nbsp; 2 Shares</span>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className="col-4 text-center">
                                        <img src="./icons8-facebook-like-96.png" alt="" className='post_icons opacity-1'/><span className="post_text">Like</span>
                                    </div>
                                    <div className="col-4 text-center">
                                        <img src="./icons8-comments-52.png" alt=""  className='post_icons'/> <span className="post_text"> Comments</span>
                                    </div>
                                    <div className="col-4 text-center">
                                        <img src="./icons8-share-96.png" alt="" className='post_icons' /><span className="post_text"> Share </span>
                                    </div>
                                </div>
                            </div>
                       )
                    )}

                    </div>
                )
    }
}

export default Posts;