import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Content from '../components/Home/Content';
import FooterPage from '../components/FooterPage';

//importando estilização
import '../styles/Home.css'

export default function App() {

  return (
    <>
        <Header />
        <Hero />
        <Content />
        <FooterPage />
    </>
  )
}

