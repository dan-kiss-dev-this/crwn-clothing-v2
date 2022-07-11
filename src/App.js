import Home from '../src/routes/home/home.component.jsx'
import { Routes, Route } from 'react-router-dom';
import Shop from './shop'

import Directory from './components/directory/directory.component.jsx'
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} >
          <Route path="shop" element={<Shop />} />

        </Route>
      </Routes>
      <Home />
    </div>
  );
};

export default App;