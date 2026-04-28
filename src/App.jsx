import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import Blog from './pages/Blog';
import Campaigns from './pages/Campaigns';
import CareSupport from './pages/CareSupport';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Events from './pages/Events';
import FTN from './pages/FTN';
import Home from './pages/Home';
import ImpactStories from './pages/ImpactStories';
import Jobs from './pages/Jobs';
import MarketSquare from './pages/MarketSquare';
import Programs from './pages/Programs';
import SkillsTraining from './pages/SkillsTraining';
import UserDashboard from './pages/UserDashboard';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/skills-training" element={<SkillsTraining />} />
        <Route path="/care-support" element={<CareSupport />} />
        <Route path="/ftn" element={<FTN />} />
        <Route path="/market-square" element={<MarketSquare />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/impact-stories" element={<ImpactStories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
