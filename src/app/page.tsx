import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import Experience from './components/Experience';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Video/>
      <Experience/>
      <Work/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}
