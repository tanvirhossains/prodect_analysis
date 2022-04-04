import './App.css';
import { Routes, Route} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import DashBoard from './Components/Dashboard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
  


     <Routes>
       <Route path='/' element={<Home></Home>}> </Route>
       <Route path='/home' element={<Home></Home>}> </Route>
       
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
