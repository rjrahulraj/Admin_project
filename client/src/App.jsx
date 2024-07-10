
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/AdminLayouts'
import AdminUsers from './pages/AdminUsers';
import AdminServices from './pages/AdminServices';
import AdminContants from './pages/AdminContacts';
import AdminUserUpdate from './pages/AdminUserUpdate';
import ServiceUpdate from './pages/AdminServiceUpdate';
import AdminNewService from './pages/AdminNewService';
import Footer from './components/Footer';
   
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>} />
         <Route path='/about' element={<About></About>}/>
         <Route path='/contact' element={<Contact></Contact>}/>
         <Route path='/services' element={<Service></Service>}/>
         <Route path='/register' element={<Register></Register>}/>
         <Route path='/logout' element={<Logout></Logout>}></Route>
         <Route path='/login' element={<Login></Login>}/>
         <Route path='*' element={<Error></Error>}/>
         <Route path='/admin' element={<AdminLayout></AdminLayout>} >
            <Route path='users' element={<AdminUsers></AdminUsers>}></Route>
            <Route path='users/:id/edit' element={<AdminUserUpdate></AdminUserUpdate>}></Route>
            <Route path='contacts' element={<AdminContants></AdminContants>}/>
            <Route path='services' element={<AdminServices></AdminServices>}/>
            <Route path='services/:id/edit' element={<ServiceUpdate></ServiceUpdate>}/>
            <Route path='service/new' element={<AdminNewService></AdminNewService>}/>
         </Route>
          
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
     
    </>
  )
}

export default App
