import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EnglishResume from './pages/EnglishResume';
import ChineseResume from './pages/ChineseResume';

const App = () => (
    <Router basename="/react-resume">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<EnglishResume />} />
            <Route path="/zh" element={<ChineseResume />} />
        </Routes>
    </Router>
);

export default App;
