const PostList = (post) => {
  return(`
        <div class="row">
           <div class="col-1 col-md-1 col-lg-1 col-xl-1">
                <img class="wd-rounded-avatar rounded-circle" src="${post.avatar}">
           </div>
           <div class="col-11 col-lg-11 col-xl-11">
                <div>
                  <span class="wd-name-text"> ${post.userName}</span>
                  <span><img class = "wd-icon-details me-1" src="../../res/verified-white.png"></span>
                  <span class="wd-color wd-name-text">@${post.handle}</span>
                  <span class="wd-color wd-name-text"> - ${post.time}</span>
                  <br/>
                  <span class="wd-font-white">${post.title}</span>
                </div>
                <div class="card mt-2">
                  <img class="card-img-top wd-scale-image-override" src="${post.image}">
                  <div class="card-body override-card-color">
                    <p class="card-text wd-d-text-white mb-0">${post.content}</p>
                    <p class="card-text wd-d-gray-text ">${post.url}</p>
                  </div>
                </div>
                <div class="row mt-1">
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-regular fa-comment"> </i><span>
                        <span>${post.comment}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa fa-retweet"> </i><span>
                        <span>${post.retweet}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-regular fa-heart"> </i><span>
                         <span>${post.like}</span>
                    </div>
                    <div class="col-3 col-md-3 col-lg-3 col-xl-3">
                        <span><i class="fa-solid fa-arrow-up-from-bracket"></i><span>
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