import Slider from '../../components/Slider/Slider';
import Introduction from '../../components/Introduction/Introduction';
import Category from '../../components/Category/Category';
import About from '../../components/About/About';
import GameShop from '../../components/GameShop/GameShop'

const Homepage = props => {
  return (
    <>
      <Slider />
      <Introduction />
      <Category />
      <About />
      <GameShop />
    </>
  );
};

export default Homepage;
