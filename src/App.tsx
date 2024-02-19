import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Guide from './components/guide/Guide';

import PumpSelection from './components/pumpselection/PumpSelection';
import MainLayOut from './components/mainlayout/MainLayOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="pump_selection" element={<PumpSelection />} />
          <Route path="guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
