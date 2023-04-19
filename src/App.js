import './styles/App.scss';

import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LostKey } from './pages/LostKey';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/LostKey" element={<LostKey />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
