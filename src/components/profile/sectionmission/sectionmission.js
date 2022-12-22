import React from 'react';
import { useSelector } from 'react-redux';
import './sectionmission.css';

function SectionMission() {
  const missions = useSelector((state) => state.mission.missions);
  const missionsFiltered = missions.filter((mission) => mission.reserved === true);
  return (
    <>
      <div className="missions__container">
        <h3 className="missions__headline">My Missions</h3>
        <div className="missions">
          { missionsFiltered.length === 0 && <p>No Reserved Missions</p>}
          {missionsFiltered.map((mission) => (
            <div key={mission.id} className="missions__tab">{mission.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionMission;
