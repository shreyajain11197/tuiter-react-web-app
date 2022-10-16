import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryItem.js";
import postItems from "../PostSummaryList/PostItem.js";
import PostList from "../PostSummaryList/PostList.js";
import posts from "../PostSummaryList/Posts.js";

function exploreComponent() {
   $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
       <div>
            ${
               postItems.map(postItem => {
                  return(PostList(postItem));
               }).join('')
            }
       </div>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
   <div class="card">
        ${
           posts.map(post => {
              return(PostSummaryList(post));
           }).join('')
        }
  </div>
  </div>
   `);
}
$(exploreComponent);