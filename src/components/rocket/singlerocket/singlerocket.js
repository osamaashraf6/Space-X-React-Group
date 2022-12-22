import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelRocket } from '../../../redux/rockets/rockets';
import './singlerocket.css';

function SingleRocket({
  id, rocketName, description, images, reversed,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="rocket-data" key={id}>
        <div>
          <picture>
            <img src={images[0]} alt={rocketName} className="image" />
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
              <button type="button" className="btnReservation" onClick={() => dispatch(cancelRocket(id))}>
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
SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  reversed: PropTypes.bool.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
export default SingleRocket;
