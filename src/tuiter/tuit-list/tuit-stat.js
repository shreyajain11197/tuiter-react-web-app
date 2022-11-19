import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStat = (
    {
        post = {}

    }
) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-1">
            <div className="col-2">
                <span><i className="bi bi-chat wd-color me-2"> </i></span>
                <span className="wd-stats-text">{post.replies}</span>
            </div>
            <div className="col-2">
                <span><i className="bi bi-arrow-repeat wd-color me-2"> </i></span>
                <span className="wd-stats-text">{post.retuits}</span>
            </div>
            <div className="col-3">
                   <span>
                    { post.liked && <i className="bi bi-heart-fill me-2 text-danger"
                                          onClick={() => dispatch(updateTuitThunk({
                                              ...post,
                                              liked: false,
                                              likes: post.likes - 1}))}/> }
                       { !post.liked && <i className="bi bi-heart-fill me-2"
                                              onClick={() => dispatch(updateTuitThunk({
                                                  ...post,
                                                  liked: true,
                                                  likes: post.likes + 1}))}/> }
                        </span>
                <span className="wd-stats-text">{post.likes}</span>
            </div>
            <div className="col-3">
                <span>
                    { post.disliked && <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                                          onClick={() => dispatch(updateTuitThunk({
                                              ...post,
                                              disliked: false,
                                              dislikes: post.dislikes - 1}))}/> }
                    { !post.disliked && <i className="bi bi-hand-thumbs-down me-2"
                                           onClick={() => dispatch(updateTuitThunk({
                                               ...post,
                                               disliked: true,
                                               dislikes: post.dislikes + 1}))}/> }
                        </span>
                    <span className="wd-stats-text">{post.dislikes}</span>
            </div>
            <div className="col-2 ">
                <span><i className="bi bi-share wd-color "></i></span>
            </div>
        </div>
    );
};
export default TuitStat;