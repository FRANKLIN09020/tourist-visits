import './App.css';
import Appbar from './component/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Place from './component/Place';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <div className="App">
       <Appbar/>
      
       <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/places' element={ <Place/> }/>
     </Routes>
     
    </div>
    
  );
}

export default App;
