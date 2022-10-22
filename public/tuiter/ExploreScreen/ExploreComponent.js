import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="form-group has-search">
                         <span class="fa fa-search form-control-feedback"></span>
                         <input type="text" class="wd-form-control border-0 wd-background-color" placeholder="Search Tuiter"/>
                         <span><a href="#">
                         <i class="fa fa-gear fa-2x wd-image-details-settings"></i> </a> </span>
                   </div>
                   <br/>
           <ul class="nav nav-tabs flex-row flex-sm-row mb-1">
                      <li class="nav-item wd-color-font">
                          <a class="wd-color-font nav-link active" href="#"><b>For you</b></a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link wd-color-font" href="#">Trending</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link wd-color-font" href="#">News</a>
                      </li>
                      <li class="nav-item d-none d-sm-block d-md-block d-lg-block">
                          <a class=" nav-link wd-color-font " href="#">Sports</a>
                      </li>
                      <li class="nav-item active d-none d-sm-none d-md-block d-lg-block">
                          <a class=" nav-link wd-color-font wd-first-link"
                             href="#">Entertainment</a>
                      </li>
                  </ul>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
