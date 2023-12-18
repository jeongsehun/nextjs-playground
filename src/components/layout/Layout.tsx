// components/Layout.js
import Header from './Header';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
