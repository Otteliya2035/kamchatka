import logo from './logo.svg';
import '../components/App/App.css';
import Main from './Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Tips from './Tips/Tips';
import Tour1 from './Tour1/Tour1'
import Tour2 from './Tour2/Tour2';
import Tour3 from './Tour3/Tour3';
import Tours from './Main/Tours/Tours'
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tour/dostupnaya-rybalka" element={<Tour1/>} />
          <Route path="/tour/shiveluch-nizhniy" element={<Tour2 />} />
          <Route path="/tour/shiveluch-tolbachik-nizhniy" element={<Tour3 />} />
          <Route path="/tour/0" element={<Tour1/>} />
          <Route path="/tour/2" element={<Tour2 />} />
          <Route path="/tour/3" element={<Tour3 />} />
          <Route path="/tour/:tourId" element={<Tours />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
