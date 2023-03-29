import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Partials/Layout';
import Login from './components/Login';
import Registro from './components/Register/register';
import { UserContextProvider } from './userContext';
import { Create } from './components/create';
import Post from './components/Post';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="">
      <UserContextProvider >
        <Routes>
          <Route path='/' element={<Layout />} >
            
            <Route index element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path="/post/:id" element={<Post/>} />

          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
