import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateComponent from './components/PrivateComponant';
import Login from './components/Login';
import AddProduct from './components/AddProduct.component';
import ProductList from './components/ProductList';
import UpdateProduct from './components/Update.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />} >
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>Logout Component</h1>} />
            <Route path='/Profile' element={<h1>Profile Component</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
