import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png';
import certificate from '../assets/certificate.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navBarRef = useRef(null); // Reference to the navbar element

  // Only show "Transport" when on services page, otherwise show "Usluge"
  const isServicesPage = location.pathname === '/services';
  const servicesText = isServicesPage ? 'Transport' : 'Usluge';
  const servicesLink = isServicesPage ? '/transport' : '/services';

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navBarRef.current.classList.add('backdrop-blur-md', 'shadow-lg', 'transition', 'duration-500', 'bg-opacity-80');
      } else {
        navBarRef.current.classList.remove('backdrop-blur-md', 'shadow-lg', 'bg-opacity-80');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navBarRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 bg-darkGray hover-custom-filter">
      <img 
        src={logo} 
        alt="logo" 
        onClick={() => window.scrollTo({ top: 0 })}
        className="w-20 cursor-pointer hover-custom-filter-logo transition duration-500"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5 lg:gap-10 hover-custom-filter text-white font-semibold text-md uppercase">
        <li><Link to="/" className="hover:text-primeYellow transition duration-500">Početna</Link></li>
        <li><Link to="/about" className="hover:text-primeYellow transition duration-500">O nama</Link></li>
        <li><Link to={servicesLink} className="hover:text-primeYellow transition duration-500">{servicesText}</Link></li>
        <li><Link to="/contact" className="hover:text-primeYellow transition duration-500">Kontakt & Lokacije</Link></li>
        <li><Link to="/clients" className="hover:text-primeYellow transition duration-500">Saradnici</Link></li>
      </ul>

      <div className="hidden md:block">
        <a 
          href="https://verify.safesigned.com/certificate/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOm51bGwsInJlZmVycmVyIjoid3d3Lmdvb2dsZS5jb20iLCJ2ZXJpZmllZCI6MCwic2NsX3R5cGUiOm51bGwsInNlYWxfc2hhcGUiOiI0IiwidGV4dF9pZCI6bnVsbCwibWluaWNvZGUiOm51bGwsInVybCI6Imh0dHA6Ly93d3cucm9rc3BlZC5ycy8iLCJ0b2tlbiI6IkYwRjAiLCJjb2Rpbmdfa2V5IjoiYmdiTm5uYmdNTExrS0tsIiwiY2VydGlmaWNhdGVfaWQiOjc0NjYsImNlcnRpZmljYXRlX3R5cGVfaWQiOjI0NCwiY2xpZW50X2lwIjoiMTg4LjI1NS4xNjQuMTQwIiwic2JfbG9nb19pZCI6bnVsbCwiaHR0cHNfdXNlZCI6ZmFsc2V9.dmbkiy8TKp0F3JfZa3FBzaxmhCUkSZLV7a4qZBOgaTY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={certificate} 
            alt="certificate" 
            className="w-14 hover-custom-filter-logo transition duration-500"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <img 
          src={menuIcon} 
          alt="menu" 
          onClick={openMenu}
          className="w-8 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <ul 
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen 
          bg-primeGreen transition duration-500 uppercase
          ${isMobileMenuOpen ? 'right-0' : '-right-64'}`}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <img src={closeIcon} alt="close button" className="w-5 cursor-pointer" />
        </div>
        <li><Link to="/" className="hover:text-primeYellow transition duration-500" onClick={closeMenu}>Početna</Link></li>
        <li><Link to="/about" className="hover:text-primeYellow transition duration-500" onClick={closeMenu}>O nama</Link></li>
        <li><Link to={servicesLink} className="hover:text-primeYellow transition duration-500" onClick={closeMenu}>{servicesText}</Link></li>
        <li><Link to="/contact" className="hover:text-primeYellow transition duration-500" onClick={closeMenu}>Kontakt & Lokacije</Link></li>
        <li><Link to="/clients" className="hover:text-primeYellow transition duration-500" onClick={closeMenu}>Saradnici</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;