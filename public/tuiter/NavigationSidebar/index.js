const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-t wd-color-font"></i></a>

     <a class="list-group-item" href="/">
        <i class="fa fa-home wd-color-font" aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Home</span></a>

     <a class="list-group-item wd-color-font active"  href="#">
        <i class="fa fa-hashtag wd-color-font" aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline">Explore</span></a>

     <a class="list-group-item wd-color-font" href="#">
         <i class="fa fa-bell wd-color-font" aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Notifications</span></a>

     <a class="list-group-item wd-color-font" href="#">
         <i class="fa fa-envelope wd-color-font"  aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Messages</span></a>

     <a class="list-group-item wd-color-font" href="#">
         <i class="fa fa-bookmark wd-color-font"  aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Bookmarks</span></a>

     <a class="list-group-item wd-color-font" href="#">
         <i class="fa fa-list wd-color-font"  aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Lists</span></a>

     <a class="list-group-item wd-color-font"  href="#">
         <i class="fa fa-user wd-color-font" aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >Profile</span></a>

     <a class="list-group-item wd-color-font" href="#">
         <i class="fa fa-ellipsis-h wd-color-font"  aria-hidden="true"></i>
            <span class="d-none d-xl-inline d-xxl-inline" >More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;