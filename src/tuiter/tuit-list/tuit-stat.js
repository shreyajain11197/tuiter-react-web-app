import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";

const TuitStat = (
    {
        post = {}
    }
) => {
    return(
        <div className="row mt-1">
            <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                <span><i className="fa-regular fa-comment wd-color me-2"> </i></span>
                <span className="wd-stats-text">{post.replies}</span>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                <span><i className="bi bi-arrow-repeat wd-color me-2"> </i></span>
                <span className="wd-stats-text">{post.retuits}</span>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3">

                {post.liked &&
                    <span> <i className="bi bi-heart-fill wd-likes-color me-2" aria-hidden="true"> </i></span>
                }
                {!post.liked &&
                    <span> <i className="bi bi-heart wd-color  me-2" aria-hidden="true"> </i></span>
                }
                <span className="wd-stats-text">{post.likes}</span>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                <span><i className="bi bi-share wd-color "></i></span>
            </div>
        </div>
    );
};
export default TuitStat;