import React from 'react';
import './Profile.css';

import placeholder from '../../img/user.png';
import ProfileData from './ProfileData'


const Profile = () => {

    return (
        <div className = "profile container">
            <div className="user__page">
                <div className="user__photo">
					<figure>
                	    <img src={placeholder} alt="avatar" />
					</figure>

                </div>

                 <div className="user__info">
                    <h2><i className="material-icons">info</i>About</h2>
                    <ProfileData  />
                </div>
			</div>
		</div>
    )
}


export default Profile