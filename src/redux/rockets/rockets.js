// define the types
export const GET = 'space/rockets/FETCH_ROCKETS';

// the reducer for the rockets
export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        id: action.payload[key].id,
        rocketName: action.payload[key].rocket_name,
        description: action.payload[key].description,
        images: action.payload[key].flickr_images,
      }));
    default:
      return state;
  }
}
