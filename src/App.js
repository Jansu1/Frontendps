import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Greetings from './Components/Greetings';
import Mynavbar from './Components/Mynavbar';
import Restdash from './Components/Restdash';
import Data from './Components/Data';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Newdash from './Components/Newdash';
import Updatepf from './Components/Updatepf';
import Profile from './Components/Profile';
import Event1 from './Components/Event1';
import Event2 from './Components/Event2';
import Event3 from './Components/Event3';
import Event4 from './Components/Event4';
import Event5 from './Components/Event5';
import Event6 from './Components/Event6';
import Company from './Components/Company';


function App() {
  return (
    <div className="App">
      <Routes>
        <>
        <Route path="/" element={<Home/>}/>
        <Route path="/Data" element={<Data/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Newdash" element={<Newdash/>}/>
        <Route path="/Updatepf" element={<Updatepf/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Event1" element={<Event1/>}/>
        <Route path="/Event2" element={<Event2/>}/>
        <Route path="/Event3" element={<Event3/>}/>
        <Route path="/Event4" element={<Event4/>}/>
        <Route path="/Event5" element={<Event5/>}/>
        <Route path="/Event6" element={<Event6/>}/>
        <Route path="/Company" element={<Company/>}/>
        </>
      </Routes>

    </div>
  );
}
export default App;
