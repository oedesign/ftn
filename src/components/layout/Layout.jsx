import Footer from './Footer';
import Header from './Header';
import SecondaryNav from './SecondaryNav';

function Layout({ children, activePage = 'Home' }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <SecondaryNav activePage={activePage} />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;