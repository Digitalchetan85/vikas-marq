import './App.scss';
import TopHeader from './Components/TopHeader';
import MainSlider from "./Components/MainSlider";
import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Overview from "./Components/Overview";
import Gallery from './Components/Gallery';
import SideForm from './Components/SideForm';
import Footer from './Components/Footer';
import Location from './Components/Location';
import { Modal } from 'react-bootstrap';
import Pricing from './Components/Pricing';
import MasterPlan from './Components/MasterPlan';

function App() {
  return (
    <>
      <TopHeader />
      <MainSlider />
      <About />
      <Modal />
      <Overview />
      <Gallery />
      <Pricing />
      <Amenities />
      <MasterPlan />
      <SideForm />
      <Location />  
      <Footer />
    </>
  );
}

export default App;
