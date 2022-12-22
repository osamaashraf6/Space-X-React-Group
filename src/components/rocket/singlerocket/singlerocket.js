import React from 'react';
import PropTypes from 'prop-types';

function SingleRocket({

  id, rocketName, description, images,
}) {
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
              {description}
            </p>
          </div>
          <div className="reserve-action">
            <button type="button" className="btnReservation">
              Reserve Rocket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
export default SingleRocket;
