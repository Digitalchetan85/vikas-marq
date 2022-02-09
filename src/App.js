import './App.scss';
import TopHeader from './Components/TopHeader';
import MainSlider from "./Components/MainSlider";
import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Overview from "./Components/Overview";
import Gallery from './Components/Gallery';
import SideForm from './Components/SideForm';

function App() {
  return (
    <>
      <TopHeader />
      <MainSlider />
      <About />
      <Amenities />
      <Overview />
      <Gallery />
      <SideForm />
    </>
  );
}

export default App;
