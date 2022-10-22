const PostList = (post) => {
  return(`
        <div class="row">
           <div class="col-1">
                <img class="wd-rounded-avatar rounded-circle" src="${post.avatar}">
           </div>
           <div class="col-11">
            <div class="ms-3">
                  <span class="wd-name-text me-1"> ${post.userName}</span>
                  <span><img class = "wd-icon-details me-1" src="../../res/verified-white.png"></span>
                  <span class="wd-color">@${post.handle}</span>
                  <span class="wd-color"> - ${post.time}</span>
                  <br/>
                  <span class="wd-font-white">${post.title}</span>
                <div class="card mt-2">
                  <img class="card-img-top wd-scale-image-override" src="${post.image}">
                  <div class="card-body override-card-color">
                    <p class="ms-3 card-text wd-text-size mb-0">${post.content}</p>
                    <p class="card-text wd-d-gray-text ">${post.url}</p>
                  </div>
                </div>
                </div>
                <div class="row mt-1">
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-regular fa-comment wd-color"> </i><span>
                        <span class="wd-d-gray-text">${post.comment}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa fa-retweet wd-color"> </i><span>
                        <span class="wd-d-gray-text">${post.retweet}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-regular fa-heart wd-color"> </i><span>
                         <span class="wd-d-gray-text">${post.like}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-solid fa-arrow-up-from-bracket wd-color"></i><span>
                     </div>
                </div>
                <hr>
           </div>
        </div>
  <br/>
   `
  );
}
export default PostList;