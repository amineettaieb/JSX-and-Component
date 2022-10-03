import React, { Component } from 'react';
import ImgProfile from"./profile.png"
import useStyles from "./ProfilePhoto.style"

const ProfilePhotos = () => {
   const {picture}  = useStyles() 

   return <img src={ImgProfile} className={picture} alt="myprofile" />;
}

export default ProfilePhotos