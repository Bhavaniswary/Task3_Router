import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from "./component/Navbar";
import ContactLayout from './layouts/ContactLayout';
import Rootlayout from "./layouts/Rootlayout";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Mail from './screens/Mail';
import PageNotFound from './screens/PageNotFound';
import Phone from './screens/Phone';


const router =createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Rootlayout/>}>
       <Route index element={<Home/>}/> 
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<ContactLayout/>}/> 
          <Route path='/contact/mail' element={<Mail/>}/>
          <Route path='/contact/phone' element={<Phone/>}/>

    </Route>
    
  )
)


function App() {
 return (
  <RouterProvider router={router}/>
 );
}

export default App;
