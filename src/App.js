import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <h1>Added</h1>


     <Routes>
       <Route path='/' element={<Header></Header>}> </Route>
       <Route path='/header' element={<Header></Header>}></Route>
       <Route path=''></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
