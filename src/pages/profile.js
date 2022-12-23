import React from 'react';
import SecttionRocket from '../components/profile/sectionrocket/sectionrocket';
import SecttionMission from '../components/profile/sectionmission/sectionmission';
import '../App.css';

function Profile() {
  return (
    <>
      <div className="profiles">
        <SecttionRocket />
        <SecttionMission />
      </div>

    </>
  );
}

export default Profile;
