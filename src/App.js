import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FilterActions from './components/FilterActions';
import FruitCard from './components/FruitCard';
import Item from './components/Item';
import NavBar from './components/Test';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <FilterActions />
        <Item />
      </div>
    </div>
  );
}

export default App;
