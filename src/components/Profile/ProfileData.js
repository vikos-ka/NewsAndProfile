import React from 'react';
import './Profile.css';


const ProfileData = (props) => {
    return ( 
      <>
        <div className="user__data">
          <span>Full name: </span>
          Viktoria Kaplunova
        </div>
        <div>
          <span>About me: </span>Here should be some info
        </div>
        <div>
          <span>Contacts:</span>
          {Object.keys(myContacts)
            .map( (key) => {
              return <Contact className = "ml-6 contact" key = {key}
                contactTitle = {key} 
                contactValue = {myContacts[key]}
                /> }
           )}
        </div>
      </>
    )
  }

const myContacts = {github: 'https://github.com/vikos-ka', linkedin: 'https://www.linkedin.com/in/vika-kaplunova-80920b199', facebook: 'www.facebook.com/vika.vkaplunova'}

const Contact = ({contactTitle, contactValue}) => {
    return <div className = "contact" ><i className = {`fab fa-${contactTitle}`}></i><span>{contactTitle}</span>: {contactValue}</div>
 }

export default ProfileData;