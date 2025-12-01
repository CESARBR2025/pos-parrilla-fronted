import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WaiterHomePage } from '../modules/tables/pages/WaiterHome';
import Sprite from '../assets/sprite.svg?raw';

function App() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Sprite }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WaiterHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
