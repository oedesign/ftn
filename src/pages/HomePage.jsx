import { mission } from '../data/mission';

function HomePage() {
  return (
    <header className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Feed The Nation</p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Welcome to Feed The Nation</h1>
      <p className="max-w-2xl text-lg text-slate-600">{mission}</p>
    </header>
  );
}

export default HomePage;
