import './App.css';
import { ButtonAppBar } from './Components/Appbar/Appbar';
import  { Fooditems } from './Components/Fooditems/Fooditems';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Cartscreen from './Components/Appbar/Cartscreen';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <ButtonAppBar/>
      <Routes>
        <Route path='/' exact element = {<Fooditems/>} />
        <Route path='/cart' exact element = {<Cartscreen/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
