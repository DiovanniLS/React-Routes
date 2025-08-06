import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

//pages 

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


//components

import Navbar from './components/Navbar';
import Info from './pages/Info';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
    <BrowserRouter>
    <Navbar />
    {/*Barra de pesquisa  */}
    <SearchForm />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='/products/:id' element={<Product />} />
   {/*nested routes */}
   <Route path='/products/:id/info' element={<Info />} />

   {/*Pesquisa*/}
   <Route path='/search' element={<Search />} />
   {/*no match route */}
   <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
