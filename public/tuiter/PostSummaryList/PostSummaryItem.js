const PostSummaryList = (post) => {
  return(`
   <div class="mb-5 pe-5">
       <img class = " wd-image-details pb-1" src="${post.image}" />
       <div class="wd-d-heading wd-links-color">${post.topic}</div>
       <span class="wd-d-text ">${post.userName}</span>
       <img class = "wd-icon-details me-1" src="../../res/verified-white.png">
       <span class="wd-d-text wd-color"> - ${post.time}</span>
       <br/>
       <span class="wd-font-bold-white">
           ${post.title}
       </span>
   </div>
   `
  );
}
export default PostSummaryList;