import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import TutorialPage from './pages/TutorialPage';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<TutorialPage />} />
      </Routes>
  );
}
