import { Link } from 'react-router-dom';
import headerBg from '../assets/bg-header.png';
import logo from '../assets/logo.png';

const HomeHeader = () => {
  return (
    <div className="bg-center bg-cover" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center md:w-11/12 mx-10 md:mt-[7%] md:mx-[5%]">
          <img 
            src={logo} 
            alt="logo" 
            className="hover-custom-filter transition duration-500 w-[600px]"
          />
          
          <h1 className="font-bold font-roboto text-4xl md:text-[64px] mt-8 mb-5 text-white uppercase">
            Rok Šped Plus D.O.O.
          </h1>
          
          <h3 className="text-xl md:text-3xl mb-5 font-semibold text-lightGray">
            Medjunarodna Špedicija i Transport
          </h3>
          
          <p className="max-w-2xl mx-auto text-primeYellow font-semibold mb-5 text-lg md:text-2xl">
            Smederevo, Srbija
          </p>
        </div>

        <Link 
          to="/about"
          className="px-6 py-3 font-roboto bg-primeGreen font-semibold rounded-sm hover:scale-105 hover-custom-filter transition duration-500 text-md text-lightGray hover:bg-primeYellow"
        >
          SAZNAJTE VIŠE
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;