import logo from '../assets/logo.png';
import phoneIcon from '../assets/phone-icon.png';
import emailIcon from '../assets/email-icon.png';
import locationIcon from '../assets/location-icon.png';
import webIcon from '../assets/web-icon.png';

const Footer = () => {
    return (
        <div className="bg-darkGray py-4">
            <div className="text-center flex items-center justify-center md:mx-auto">
                <div className="px-2 flex flex-col items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="md:w-40 w-28"
                    />
                    <p className="text-lightGray md:mt-2 font-roboto">
                        Rok Šped Plus d.o.o.
                    </p>
                </div>

                <div className="flex flex-col gap-2 items-left border-l-2 border-primeGreen md:pl-11 pl-2">
                    <div className="flex items-left gap-1 md:gap-5">
                        <img
                            src={phoneIcon}
                            alt="phone icon"
                            className="w-6"
                        />
                        <p className="text-lightGray hover:text-primeGreen transition duration-500 text-sm md:text-md">
                            +381 64 13 09 794
                        </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-5">
                        <img
                            src={emailIcon}
                            alt="email icon"
                            className="w-6"
                        />
                        <a
                            href="mailto:office@roksped.rs"
                            className="text-lightGray hover:text-primeGreen transition duration-500 text-sm md:text-md"
                        >
                            office@roksped.rs
                        </a>
                    </div>

                    <div className="flex items-center gap-1 md:gap-5">
                        <img
                            src={locationIcon}
                            alt="location icon"
                            className="w-6"
                        />
                        <a
                            href="https://maps.app.goo.gl/2z7FkEPnUddgFJTJ6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lightGray hover:text-primeGreen transition duration-500 text-sm md:text-md"
                        >
                            Kolarski Put 330
                        </a>
                    </div>

                    <div className="flex items-center gap-1 md:gap-5">
                        <img
                            src={webIcon}
                            alt="web icon"
                            className="w-6"
                        />
                        <a
                            href="https://roksped.rs"
                            className="text-lightGray hover:text-primeGreen transition duration-500 text-sm md:text-md"
                        >
                            www.roksped.rs
                        </a>
                    </div>

                </div>

            </div>
            <div className="flex flex-col items-center mt-5 px-4">
                <p className="text-lightGray text-center font-roboto">Copyright &copy; 2024 Rok Šped Plus D.O.O. All rights
                    reserved.</p>
                <p className="text-white">Designed by <a href="https://jovanljusic.com" target="_blank"
                    className="hover:underline text-primeGreen">Jovan Ljusic</a></p>
            </div>
        </div >
    );
};

export default Footer;