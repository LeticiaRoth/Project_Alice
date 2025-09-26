import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import TutorialPage from './pages/TutorialPage';
import SeloPage from "../src/pages/SeloPage";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/paginaSelo" element={<SeloPage />} />
      </Routes>
  );
}
