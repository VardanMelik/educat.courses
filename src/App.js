import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import CurseInfo from './components/CurseInfo';
import WatchVideo from './components/WatchVideo';
import WhoCanApply from './components/WhoCanApply';
import FooterBanner from './components/FooterBanner';
import FooterCurseInfo from './components/FooterCurseInfo';
import Footer from './components/Footer';

function App() {
  return (
    // BEM
    <div className="app">
      <Header/>
      <Banner/>
      <Main/>
      {/*<CurseInfo/>*/}
      <WatchVideo/>
      {/*<WhoCanApply/>
      <FooterCurseInfo/>
      <FooterBanner/>*/}
      <Footer/>
      
      
    </div>
  );
}

export default App;
