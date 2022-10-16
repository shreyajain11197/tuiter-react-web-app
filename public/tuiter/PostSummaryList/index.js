import PostSummaryList from "./PostSummaryItem.js";
import posts from "./Posts.js";
const postSummaryList = () => {
   return(`
       <div class="wd-container">
           <img class="wd-scale-image" src="../../res/starship.png">
           <p class=" wd-bottom-left"> Spacex's Starship </p>
       </div>
       <div class="card mt-3">
                 ${
                    posts.map(post => {
                       return(PostSummaryList(post));
                    }).join('')
                 }
       </div>
   `);
}
export default postSummaryList;