import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const PostItem = (
 {
   post = {}
 }
) => {
 return(
  <li className="list-group-item">
    <div className="row">
        <div class="col-1"> </div>
        <div class = "col-11">
        {post.isReuit &&
                <span class="wd-stats-text-retweet wd-font-bold">
                <i class="fa fa-retweet wd-color"></i> Elon Musk Retuited</span>
        }
        </div>
    </div>
   <div className="row mt-0">
    <div className="col-1">
        <img className="wd-rounded-avatar rounded-circle" src={`/res/images/${post.avatar}`}/>
    </div>
    <div className="col-11">
       <div class="ms-3">
            <span class="wd-username-bold me-1"> {post.userName}</span>
            <span><i class="bi bi-patch-check-fill me-1  wd-twitter-color"></i></span>
            <span class="wd-dots-span"> <img class = "wd-logo-dot" src="../../res/images/dots-gray-icon.png" /></span>
            <span class="wd-color wd-text-size">@{post.handle}</span>
            <span class="wd-color wd-text-size bi bi-dot">{post.time}</span>
            <br/>
            <span class=" wd-title-color wd-text-size mb-3">{post.title}</span>
            {post.url.length > 0 &&
                  <span class=" wd-title-color wd-text-size"><a class="wd-twitter-color wd-no-decoration" href="#">{post.url}</a></span>}
              {post.image.length > 0 &&
               <img className="wd-image-details mt-2 rounded-4" src={`/res/images/${post.image}`}/>}
              {post.image.length == 0 &&
               <div class="card rounded-4">
                <div class="mt-2 ms-3">
                     <span><img className="wd-rounded-avatar-nested rounded-circle" src={`/res/images/${post.nested.avatar}`}/> </span>
                     <span class="wd-username-bold me-1"> {post.nested.userName}</span>
                     <span><i class="bi bi-patch-check me-1"></i></span>
                     <span class="wd-color wd-text-size">@{post.nested.handle}</span>
                     <span class="wd-color wd-text-size"> - {post.nested.time}</span>
                     <br/>
                     <span class=" wd-title-color wd-text-size mb-3">{post.nested.title}</span>
                    <span class="wd-title-color wd-text-size"><a class=" wd-title-color wd-no-decoration" href="#">{post.nested.url}</a></span>
                </div>
               </div>
              }
           <div class="row mt-1">
               <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                   <span><i class="fa-regular fa-comment wd-color me-2"> </i></span>
                   <span class="wd-stats-text">{post.comment}</span>
               </div>
               <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                   <span><i class="fa fa-retweet wd-color me-2"> </i></span>
                   <span class="wd-stats-text">{post.retweet}</span>
               </div>
               <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                   <span><i class="fa-regular fa-heart wd-color me-2"> </i></span>
                    <span class="wd-stats-text">{post.like}</span>
               </div>
               <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                   <span><i class="fa-solid fa-arrow-up-from-bracket wd-color"></i></span>
                </div>
           </div>
           <div class="row mt-3">
                {post.isShowMore &&
                      <span class="wd-show-text"><a class="wd-twitter-color wd-no-decoration" href="#">Show this thread</a></span>
                }
           </div>
       </div>
    </div>
   </div>
  </li>
 );
};
export default PostItem;

