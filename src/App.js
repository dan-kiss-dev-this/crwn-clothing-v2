import Home from '../src/routes/home/home.component.jsx'
import { Routes, Route, Outlet } from 'react-router-dom';
import Shop from './shop'

import Directory from './components/directory/directory.component.jsx'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
        <Outlet />
      </div>
    </div>
  )
}

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Directory categories={categories} />}></Route>
      </Route>
    </Routes>
  );
};

export default App;