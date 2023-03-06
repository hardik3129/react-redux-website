import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from './layouts/Layouts';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layouts><Home /></Layouts>} />
        <Route path='/addproducts' element={<Layouts><AddProduct /></Layouts>} />
        <Route path='/editproducts/:id' element={<Layouts><AddProduct /></Layouts>} />
      </Routes>
    </div>
  );
}

export default App;
