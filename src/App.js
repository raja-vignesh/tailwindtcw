import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FilterActions from './components/FilterActions';
import FruitCard from './components/FruitCard';
import Item from './components/Item';
import NavBar from './components/Test';
import SeasonSpecials from './components/SeasonSpecials';
import BottomSection from './components/BottomSection';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <FilterActions />
        <Item />
        <SeasonSpecials/>
        <BottomSection/>
      </div>
    </div>
  );
}

export default App;
