import './App.css';
import { Routes, Route} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import DashBoard from './Components/Dashboard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1>Added</h1>


     <Routes>
       <Route path='/' element={<Header></Header>}> </Route>
       <Route path='/home' element={<Header></Header>}></Route>
       <Route path='/header' element={<Header></Header>}></Route>
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
