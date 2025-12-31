import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WaiterHomePage } from '../modules/tables/pages/WaiterHome';
import { Menu } from '../modules/foodGroup/pages/Menu';
import { KitchenScreen } from '../modules/kitchen/pages/KitchenScreen';

import Sprite from '../assets/sprite.svg?raw';

function App() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Sprite }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WaiterHomePage />} />
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>

          <Routes>
          <Route path="/kitchen" element={<KitchenScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
