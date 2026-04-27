import HeroCard from './components/common/HeroCard';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout activePage="Home">
      <div className="space-y-8">
        <HomePage />
        <HeroCard />
      </div>
    </Layout>
  );
}

export default App;
