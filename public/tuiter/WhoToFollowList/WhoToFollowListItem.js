const WhoToFollowListItem = (who) => {
  return(`
   <div class = "row">
       <div class="col-2">
           <img class="wd-image-card rounded-circle" src="${who.avatarIcon}">
       </div>
       <div class="col-6">
           <span class="wd-card-title-card wd-card-font-color">${who.userName}</span>
           <span><i class="fa-sharp fa-solid fa-badge-check"></i></span>
           <span><img class = "wd-icon-details-card" src="../../res/verified-white.png"></span>
           <div class = "wd-div-title-tuits-card wd-card-font-color">@${who.handle}</div>
       </div>
       <div class="col-4">
           <button class="btn btn-primary rounded-pill "><b>follow</b></button>
       </div>
   </div>
   <br/>
   `
  );
}
export default WhoToFollowListItem;