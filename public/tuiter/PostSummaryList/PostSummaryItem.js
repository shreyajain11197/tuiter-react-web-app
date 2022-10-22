const PostSummaryList = (post) => {
  return(`
   <div class=" card-body">
       <img class = "wd-image-details" src="${post.image}" />
       <div class="wd-d-heading wd-links-color">${post.topic}</div>
       <span class="wd-d-text ">${post.userName}</span>
       <img class = "wd-icon-details me-1" src="../../res/verified-white.png">
       <span class="wd-d-text-override wd-color"> - ${post.time}</span>
       <br/>
       <span class="wd-font-bold-white">
           ${post.title}
       </span>
   </div>
   `
  );
}
export default PostSummaryList;