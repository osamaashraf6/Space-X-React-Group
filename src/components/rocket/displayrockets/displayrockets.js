import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../../redux/rockets/rockets__api';
import SingleRocket from '../singlerocket/singlerocket';
import './displayrockets.css';

const DisplayRockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <div className="rocket-container">
        <hr className="space-below" />
        {
        rockets.map((rocket) => (
          <div key={rocket.id}>
            <SingleRocket
              id={rocket.id}
              rocketName={rocket.rocketName}
              description={rocket.description}
              images={rocket.images}
            />
          </div>
        ))
      }
      </div>
    </>
  );
};
export default DisplayRockets;
