import Home from '../src/routes/home/home.component.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

// import Directory from './components/directory/directory.component.jsx'
// import { Link } from 'react-router-dom';

const Shop = () => {
  return <div>shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
