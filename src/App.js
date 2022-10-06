import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
function App() {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
