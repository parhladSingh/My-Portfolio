
import styles from './App.module.css'
import Navbar  from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Achievement from './components/Achievement/Achievement';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Modal from './components/Contact/Modal/Modal';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Achievement/>
      <Contact/>
      <Footer/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
