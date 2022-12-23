import React from 'react';
import './sectionrocket.css';
import { useSelector } from 'react-redux';

function SectionRocket() {
  const rockets = useSelector((state) => state.rocket.filter((ro) => ro.reserved));
  return (
    <>
      <div className="rockets__container">
        {rockets.length === 0 ? (<span>No Rockets here</span>) : (<h3 className="rockets__headline">My Rockets</h3>)}
        <div className="rockets">
          {rockets.map((rock) => (
            <div className="rockets__tab" key={rock.id}>{rock.rocketName}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionRocket;
