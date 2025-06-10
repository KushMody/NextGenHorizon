import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

function Layout() {
  return (
    <div className="bg-amber-50 text-gray-800 h-[92vh]">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;