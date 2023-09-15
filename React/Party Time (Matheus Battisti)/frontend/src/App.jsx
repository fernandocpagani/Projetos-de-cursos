import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
