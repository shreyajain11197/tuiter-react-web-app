import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStat from "./tuit-stat";

const TuitItem = (
    {
        post = {}
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
 return(
  <li className="list-group-item">
    <div className="row">
        <div class="col-1"> </div>
        <div class = "col-11">
        </div>
    </div>
   <div className="row mt-0">
    <div className="col-1">
        <img className="wd-rounded-avatar rounded-circle" alt="avatar" src={`/res/images/${post.image}`}/>
    </div>
    <div className="col-11">
       <div class="ms-3">
            <span class="wd-username-bold me-1"> {post.userName}</span>
            <span><i class="bi bi-patch-check-fill me-1  wd-twitter-color"></i></span>
            <span class="wd-color wd-text-size">{post.handle}</span>
            <span class="wd-color wd-text-size bi bi-dot">{post.time}</span>
           <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(post._id)}></i>
           <br/>
            <span class=" wd-title-color wd-text-size mb-3">{post.tuit}</span>
           <TuitStat
               key={post._id} post={post}/>
       </div>
    </div>
   </div>
  </li>
 );
};
export default TuitItem;

