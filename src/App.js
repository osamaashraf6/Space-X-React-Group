import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Rocket from './pages/rocket';
import Mission from './pages/mission';
import Profile from './pages/profile';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Rocket />} />
          <Route path="rocket" element={<Rocket />} />
          <Route path="mission" element={<Mission />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
