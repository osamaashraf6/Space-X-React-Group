import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from './rockets';

const URL = 'https://api.spacexdata.com/v3/rockets';
const getData = createAsyncThunk(GET, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});
export default getData;
