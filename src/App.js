import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar';
import HeroSection from './herosection/herosection';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (

    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='container'>
        <HeroSection className='Carts' />
        <HeroSection className='Carts' />
      </div>
      <div className='m-2'>
        <Content className='desc' />
      </div>
      <Footer  />
    </div>
  )
}

export default App;
