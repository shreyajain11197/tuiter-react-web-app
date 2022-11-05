import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import UserProfileItem from "./Profile";

const ProfileComponent = () => {
    const profile = useSelector(
        (state) => state.profile);
    return(
          <UserProfileItem key={profile._id} profile={profile}/>
    );
};
export default ProfileComponent;