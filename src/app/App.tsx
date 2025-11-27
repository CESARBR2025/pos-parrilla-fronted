import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WaiterHomePage } from '../modules/tables/pages/WaiterHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaiterHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
