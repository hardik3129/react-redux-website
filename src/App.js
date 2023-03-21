import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from './layouts/Layouts';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct'
import Context from './context/Context';
import { useState } from 'react';
import UseReduser from './pages/UseReduser';

function App() {

  const [Theame, setTheame] = useState('light')

  const TheameChange = () => {
    setTheame(Theame === 'light' ? 'dark a' : 'light')
  }
  
  return (
    <>
      <Context.Provider value={Theame}>
      <div className="form-check form-switch Theme">
        <input className="form-check-input" onChange={TheameChange} type="checkbox" id="flexSwitchCheckChecked" />
      </div>
        <Routes>
          <Route path='/' element={<Layouts><Home /></Layouts>} />
          <Route path='/addproducts' element={<Layouts><AddProduct /></Layouts>} />
          <Route path='/editproducts/:id' element={<Layouts><AddProduct /></Layouts>} />
          <Route path='/UseReduser' element={<Layouts><UseReduser /></Layouts>} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
