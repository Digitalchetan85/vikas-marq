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
import Pricing from './Components/Pricing';
import MasterPlan from './Components/MasterPlan';
import VirtualTour from './Components/VirtualTour';
import Contact from './Contact';
import FixedIcons from './Components/FixedIcons';

function App() {
  return (
    <>
      <TopHeader />
      <MainSlider />
      <About />
      <Overview />
      <MasterPlan />
      <Pricing />
      <Gallery />
      <Amenities />
      <VirtualTour />
      <SideForm />
      <Location />  
      <Contact />
      <Footer />
      <FixedIcons />
    </>
  );
}

export default App;
