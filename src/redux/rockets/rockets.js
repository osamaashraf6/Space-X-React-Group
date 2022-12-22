// define the types
export const GET = 'space/rockets/FETCH_ROCKETS';
export const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'space/rockets/CANCEL_RESERVATION';
// the reducer for the rockets
export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        id: action.payload[key].id,
        rocketName: action.payload[key].rocket_name,
        description: action.payload[key].description,
        images: action.payload[key].flickr_images,
        reserved: action.payload[key].active,
      }));
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
}
export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});
export const cancelRocket = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});
