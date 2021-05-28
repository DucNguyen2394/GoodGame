import Slider from '../../components/Slider/Slider';
import Introduction from '../../components/Introduction/Introduction';
import Category from '../../components/Category/Category';
import About from '../../components/About/About';

const Homepage = props => {
  return (
    <>
      <Slider />
      <Introduction />
      <Category />
      <About />
    </>
  );
};

export default Homepage;
