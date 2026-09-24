import { About } from './components/About';
import { Carousel } from './components/Carousel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Hours } from './components/Hours';
import { News } from './components/News';
import { Services } from './components/Services';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carousel />
        <About />
        <Services />
        <News />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
