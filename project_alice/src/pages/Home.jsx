import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import Content from '../components/Home/Content';
import FooterPage from '../components/FooterPage';

//importando estilização
import '../styles/Home.css'

export default function App() {

  return (
     <div className="App">
      <Header />
      <HeroSection />
      <Content />
      <FooterPage />
    </div>
  )
}

