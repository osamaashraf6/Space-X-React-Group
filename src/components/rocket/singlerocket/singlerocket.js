import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { reserveRocket, cancelRocket } from '../../../redux/rockets/rockets';
import './singlerocket.css';

function SingleRocket({
  // eslint-disable-next-line react/prop-types
  id, rocketName, description, images, reversed,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="rocket-data" key={id}>
        <div>
          <picture>
            <img src={images} alt={rocketName} className="image" />
          </picture>
        </div>
        <div className="description">
          <div className="rocket-name">
            <p className="bird-name">
              {rocketName}
            </p>
          </div>
          <div className="rocket-description">
            <p>
              {reversed && (<span className="badge">reversed</span>)}
              {description}
            </p>
          </div>
          <div className="reserve-action">
            {reversed ? (
              <button type="button" className="btnReservation cancel" onClick={() => dispatch(cancelRocket(id))}>
                cancel Rocket
              </button>
            ) : (
              <button type="button" className="btnReservation" onClick={() => dispatch(reserveRocket(id))}>
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRocket;
