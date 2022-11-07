import "./index.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../user-profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const iniProfile = useSelector(state => state.profile);
    let [profile, setProfile]  = useState(iniProfile);
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        dispatch(updateProfile({
            ...profile,
            firstName: profile.firstName,
            lastName:profile.lastName,
            bio: profile.bio,
            location: profile.location,
            website: profile.website,
            dateOfBirth: profile.dateOfBirth}));
    }
    return(

        <div className="row">
            <div>
                <Link class={"wd-color"} to={"/tuiter/profile"}><i className="fa-solid fa-xmark fa-1x"></i></Link>
                <span class=" ms-5 wd-title-size fw-bold">Edit Profile</span>
                <span><Link to={"/tuiter/profile"} className="rounded-pill btn btn-dark float-end  mb-1 ps-3 pe-3 fw-bold"
                              onClick={editProfileClickHandler}>Save
                </Link></span>
            </div>
            <div className="parent mb-5">
                <img className="wd-banner-image wd-banner-picture" src={`/res/images/${profile.bannerPicture}`} alt={"banner"}/>
                <img className="rounded-circle wd-profile-picture border-1" src={`/res/images/${profile.profilePicture}`} alt={"banner"}/>
            </div>

            <div class={"border mt-5 wd-color"}>
                <span>First Name</span> <br/>
                <input value={profile.firstName}
                          className="form-control border-0"
                          onChange={(event) => setProfile({...profile,firstName:event.target.value})}/>
            </div>
            <div className={"border mt-1 wd-color"}>
                <span>Last Name</span> <br/>
                <input value={profile.lastName}
                          className="form-control border-0"
                          onChange={(event) => setProfile({...profile, lastName: event.target.value})}/>
            </div>
            <div className={"border mt-1"}>
                <span class={"wd-color"}>Bio</span> <br/>
                <textarea value={profile.bio}
                          className="form-control border-0"
                          onChange={(event) => setProfile({...profile, bio: event.target.value})}/>
            </div>
            <div className={"border mt-1"}>
                <span class={"wd-color"}>Location</span> <br/>
                <input value={profile.location}
                          className="form-control border-0"
                          onChange={(event) => setProfile({...profile, location: event.target.value})}/>
            </div>
            <div className={"border mt-1"}>
                <span class={"wd-color"}>Website</span> <br/>
                <input value={profile.website}
                       className="form-control border-0"
                       onChange={(event) => setProfile({...profile, website: event.target.value})}/>
            </div>
            <div className={"border mt-1"}>
                <span class={"wd-color"}>Birth Date</span> <br/>
                <input type="date" value={profile.dateOfBirth}
                       className="form-control border-0"
                       onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}/>
            </div>
            <div className={" mt-2"}>
                <span>Switch to professional</span>
                <span><i class={" mt-1 fa-solid fa-greater-than float-end  mb-1 ps-3 pe-3 fw-bold"}/></span>
            </div>
        </div>

    );
};

export default EditProfile;