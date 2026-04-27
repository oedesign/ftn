import PageContainer from './components/layout/PageContainer';
import HeroCard from './components/common/HeroCard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <PageContainer>
      <HomePage />
      <HeroCard />
    </PageContainer>
  );
}

export default App;
