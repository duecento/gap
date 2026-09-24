import { About } from './components/About';
import { Carousel } from './components/Carousel';
import { Contact } from './components/Contact';
import { FoodBank } from './components/FoodBank';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Hours } from './components/Hours';
import { News } from './components/News';
import { Shop } from './components/Shop';
import { Team } from './components/Team';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carousel />
        <About />
        <Shop />
        <FoodBank />
        <Team />
        <News />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
