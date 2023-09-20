import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Adminlogin from './Adminlogin';
import Buyer from './Buyer';
import Adminpage from './Adminpage';



function App() {

  

  return (
    <div className="App">
         <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Buyer" element={<Buyer />} />
          <Route path="/Adminpage" element={<Adminpage />} />
        </Routes>
        
      
    </div>
  );
}

export default App;
